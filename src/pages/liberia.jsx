import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TwitterShareButton, FacebookShareButton, WhatsappShareButton } from "react-share";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkSimpleBold } from "react-icons/pi";
import Photo from "../assets/notphoto.png"

import "../index.css"
const Library = () => {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    const userLibrary = localStorage.getItem("userLibrary");
    if (userLibrary) {
      setSavedNews(JSON.parse(userLibrary));
    }
  }, []);

  const removeNewsFromLibrary = (url) => {
    const updatedLibrary = savedNews.filter((article) => article.url !== url);
    setSavedNews(updatedLibrary);
    localStorage.setItem("userLibrary", JSON.stringify(updatedLibrary));
  };

  return (
    <div className="">
    

      <div className="flex flex-col items-center justify-center mt-8 mb-8 md:flex-row lg:flex">
                    <h2 className="text-3xl text-center text-black md:text-4xl lg:text-5xl lg:text-center">Mi Biblioteca</h2>
                    <h2 className="text-3xl text-center text-blue-500 md:text-4xl lg:text-5xl lg:text-center lg:ml-2 md:ml-2" >
                    De Noticias
                    </h2>
                </div>
      
      {savedNews.length === 0 ? (
        
        <p className="text-2xl text-center text-black">No has guardado ninguna noticia en tu biblioteca.</p>
      ) : (
        <div className="flex flex-wrap">
          {savedNews.map((article, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full p-4 mt-10 sm:w-full md:w-1/2 lg:w-1/2"
            >
              <div className="shadow-xl card card-side bg-base-100">
                <figure className="h-64">
                  <img
                    className="object-cover w-full h-full"
                    src={article.urlToImage ? article.urlToImage : Photo}
                    alt="News"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{article.title.slice(0, 50)}</h2>
                  <p>
                    {article.description
                      ? article.description.slice(0, 100) + "..."
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

                    <div className="flex ml-2">
                      <CopyToClipboard
                        text={article.url}
                        onCopy={() => removeNewsFromLibrary(article.url)}
                      >
                        <button className="flex ml-1 text-blue-500 hover:underline">
                          <PiLinkSimpleBold className="mt-1 mr-1" />
                          Eliminar de la biblioteca
                        </button>
                      </CopyToClipboard>
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
      )}
    </div>
  );
};

export default Library;