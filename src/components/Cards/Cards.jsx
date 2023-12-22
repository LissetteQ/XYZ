import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "../../assets/notPhoto.svg";
import { TwitterShareButton, FacebookShareButton, WhatsappShareButton } from "react-share";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkSimpleBold } from "react-icons/pi";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Cards = ({ category, searchTerm }) => {
    const [news, setNews] = useState(null);
    const [error, setError] = useState(null);
    const [copiedArticleIndex, setCopiedArticleIndex] = useState(null);

    const categoryTranslations = {
        general: "General",
        technology: "Tecnología",
        business: "Negocios",
        health: "Salud",
        entertainment: "Entretenimiento",
        science: "Ciencia",
        sports: "Deportes",
    };

    const saveNewsToLibrary = (article) => {
        const userLibrary = JSON.parse(localStorage.getItem("userLibrary")) || [];
        if (!userLibrary.some((savedArticle) => savedArticle.url === article.url)) {
            const updatedLibrary = [...userLibrary, article];
            localStorage.setItem("userLibrary", JSON.stringify(updatedLibrary));
        }
    };
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
                    {}
                );
                setNews(response.data.articles);
            } catch (error) {
                console.error("Error al obtener noticias", error);
                setError(
                    "Hubo un error al obtener las noticias. Por favor, inténtalo de nuevo más tarde."
                );
            }
        };

        fetchNews();
    }, [category]);

    const filteredNews = news
        ? news.filter((article) =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    console.log("Filtered News:", filteredNews);

    return (
        <>
            <div>


                <div className="flex flex-col items-center justify-center mt-8 mb-8 md:flex-row lg:flex">
                    <h2 className="text-3xl text-center text-black md:text-4xl lg:text-5xl lg:text-center">Noticias</h2>
                    <h2 className="text-3xl text-center text-blue-500 md:text-4xl lg:text-5xl lg:text-center lg:ml-2 md:ml-2" >
                        {categoryTranslations[category]}
                    </h2>
                </div>


                <div className="flex flex-wrap">
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {filteredNews.map((article, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full p-4 sm:w-full md:w-1/2 lg:w-1/2"
                        >
                            <div className="shadow-xl card lg:card-side bg-base-100 lg:h-80 sm:h-auto">

                                <figure>
                                    <img
                                        src={article.urlToImage ? article.urlToImage : Photo}
                                        alt="News"
                                        className="w-full"
                                    />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{article.title.slice(0, 30) + "..."}</h2>
                                    <p> {article.description
                                        ? article.description.slice(0, 50) + "..."
                                        : null}
                                    </p>
                                    <div className="flex share-buttons">
                                        <TwitterShareButton title={article.title} url={article.url}>
                                            <FaXTwitter />
                                        </TwitterShareButton>
                                        <div className="ml-2"></div>
                                        <FacebookShareButton quote={article.title} url={article.url}>
                                            <CiFacebook />
                                        </FacebookShareButton>
                                        <div className="ml-2"></div>
                                        <WhatsappShareButton title={article.title} url={article.url}>
                                            <FaWhatsapp />
                                        </WhatsappShareButton>
                                        <div className="lg:flex">
                                            <div className="flex ml-2">
                                                <CopyToClipboard
                                                    text={article.url}
                                                    onCopy={() => setCopiedArticleIndex(index)}
                                                >
                                                    <button
                                                        className="flex ml-1 text-blue-500 hover:underline"
                                                    >
                                                        <PiLinkSimpleBold className="mt-1 mr-1" />
                                                        {copiedArticleIndex === index ? "Compartiendo" : "Compartir"}
                                                    </button>
                                                </CopyToClipboard>
                                            </div>

                                            <div className="flex ml-2">
                                                <button
                                                    onClick={() => saveNewsToLibrary(article)}
                                                    className="ml-2 text-blue-500 hover:underline"
                                                >
                                                    Guardar
                                                </button>
                                            </div>
                                        </div>

                                    </div>


                                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                                        👉 Leer más
                                    </a>
                                    <p>Autor: {article.author}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cards