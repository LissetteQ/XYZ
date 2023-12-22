// Footer.js
import React, { useState } from 'react';
import Logo from '../../assets/logoF.svg';
import Modals from '../Modals/Modals';
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const openModal = (modalId) => {
    setIsModalOpen(true);
    setCurrentModal(modalId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentModal(null);
  };

  return (
    <footer className="p-10 footer bg-base-200 text-base-content">
      <aside>
        <img className="logo" src={Logo} alt="Inicio" />
      </aside>
      <nav>
        <header className="flex footer-title">Nosotros</header>
        <button onClick={() => openModal('quienes_somos_modal')} className="link link-hover">
          ¿Quiénes Somos?
        </button>
        <button onClick={() => openModal('mision_modal')} className="link link-hover">
          Nuestra Misión
        </button>
        <button onClick={() => openModal('vision_modal')} className="link link-hover">
          Nuestra Visión
        </button>
        <button onClick={() => openModal('contactanos_modal')} className="link link-hover">
          Contáctanos
        </button>
      </nav>
      <Modals
        id="quienes_somos_modal"
        title={<h2 className="text-center">¿Quiénes Somos?</h2>} 
        content="Somos XYZ News, una plataforma líder en la entrega de noticias digitales de alta calidad y confiabilidad."
        isOpen={isModalOpen && currentModal === 'quienes_somos_modal'}
        onClose={closeModal}
      />
      <Modals
        id="mision_modal"
        title={<h2 className="text-center">Nuestra Misión</h2>} 
        content="Nuestra misión es proporcionar a nuestros lectores información precisa, imparcial y relevante sobre los eventos más importantes a nivel local, nacional e internacional."
        isOpen={isModalOpen && currentModal === 'mision_modal'}
        onClose={closeModal}
      />
      <Modals
        id="vision_modal"
        title={<h2 className="text-center">Nuestra Visión</h2>} 
        content="En XYZ, aspiramos a ser líderes en la transformación de la forma en que las personas acceden, consumen y comprenden las noticias en la era digital. "
        isOpen={isModalOpen && currentModal === 'vision_modal'}
        onClose={closeModal}
      />
      <Modals 
        id="contactanos_modal"
        title={<h2 className="text-center">Contáctanos</h2>} 
        content="Para ponerte en contacto con nosotros lo puedes hacer a través de nuestras redes sociales o al correo xyz@contacto.cl"
        isOpen={isModalOpen && currentModal === 'contactanos_modal'}
        onClose={closeModal}
      />
      <nav>
        <header className="footer-title">Social</header>
        <a href="https://www.instagram.com" target="_blank" className="flex link link-hover">
          <FaInstagram className="mt-1 mr-2" /> Instagram
        </a>
        <a href="https://www.facebook.com" target="_blank" className="flex link link-hover">
          <CiFacebook className="mt-1 mr-2" /> Facebook
        </a>
        <a href="https://www.youtube.com" target="_blank" className="flex link link-hover">
          <FaYoutube className="mt-1 mr-2" /> Youtube
        </a>
        <a href="https://twitter.com" target="_blank" className="flex link link-hover">
          <FaXTwitter className="mt-1 mr-2" /> Twitter
        </a>
      </nav>
      <nav>
        <header className="flex footer-title">Legal</header>
        <button onClick={() => openModal('terms_use_modal')} className="link link-hover">
          Términos de uso
        </button>
        <button onClick={() => openModal('privacy_policy_modal')} className="link link-hover">
          Política de privacidad
        </button>
        <button onClick={() => openModal('cookies_policy_modal')} className="link link-hover">
          Política de Cookies
        </button>
      </nav>
      <Modals
        id="terms_use_modal"
        title=" Términos de uso"
        content="1. ACEPTACIÓN 
        En el presente documento (en adelante, el “Contrato”) se establecen los términos y condiciones de.... 
        2. REQUISITOS RELATIVOS AL USUARIO....
        3. LICENCIA..."
        isOpen={isModalOpen && currentModal === 'terms_use_modal'}
        onClose={closeModal}
      />
      <Modals
        id="privacy_policy_modal"
        title="Política de privacidad"
        content="La presente Política de Privacidad tiene por finalidad informar a los usuarios del tratamiento de los datos personales que se recolectan a través del sitio web, el Portal del Consumidor y cualquier otra plataforma dispuesta en el sitio web del Servicio Nacional del Consumidor, en cumplimiento de la normativa de protección de datos personales que está regulada en distintos cuerpos legales."
        isOpen={isModalOpen && currentModal === 'privacy_policy_modal'}
        onClose={closeModal}
      />
      <Modals
        id="cookies_policy_modal"
        title="Políticas de cookies"
        content="Las políticas de cookies tienen como objetivo informar a los usuarios del uso de las mismas, para que sepan cuál es su finalidad, su duración y su titular, de manera que puedan consentir o no su instalación («aceptar» las cookies) sabiendo en qué consisten, su función y el tipo de datos personales que van a captar,"
        isOpen={isModalOpen && currentModal === 'cookies_policy_modal'}
        onClose={closeModal}
      />
    </footer>
  );
};

export default Footer;
