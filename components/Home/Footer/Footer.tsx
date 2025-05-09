import Link from 'next/link'
import React from 'react'
import { FaClock, FaDribbble, FaEnvelope, FaFacebook, FaMapMarkedAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-white py-10'>
      <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {/* Logo and description */}
          <div>
            {/* logo */}
            <Link href="/">
              <h1 className="text-xl md:text-3xl font-extrabold cursor-pointer">
                <span className="text-3xl md:text-4xl text-pink-700">L</span>ideraTec
              </h1>
            </Link>
            {/* Description */}
            <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, placeat!
            </p>
          </div>

          {/* About us links */}
          <div>
            <h2 className='text-lg font-semibold text-gray-800'>Sobre Nosotros</h2>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
              <li>Centro de soporte</li>
              <li>Atención al cliente</li>
              <li>Sobre nosotros</li>
              <li>Derechos de autor</li>
              <li>Campaña Popular</li>
            </ul>
          </div>

          {/* Our information links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Nuestra información</h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
              <li>Política de devoluciones</li>
              <li>Política de privacidad </li>
              <li>Términos y condiciones</li>
              <li>Mapa del sitio</li>
              <li>Horario de la tienda</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>Información de contacto</h3>
            <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
              <li className='flex items-center'>
                <FaMapMarkedAlt className='mr-2' />
                Lima, Perú
              </li>
              <li className='flex items-center'>
                <FaPhoneAlt className='mr-2' />
                Lima, Perú
              </li>
              <li className='flex items-center'>
                <FaMapMarkedAlt className='mr-2' />
                +51 959654654
              </li>
              <li className='flex items-center'>
                <FaClock className='mr-2' />
                7 days - 8am - 10am
              </li>
              <li className='flex items-center'>
                <FaEnvelope className='mr-2' />
                info.example@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Button sections */}
        <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
          <p className='text-center md:text-left'>
            Copyright © 2025 Webdev. All rights reserved.
          </p>

          <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <span>Social : </span>
            <Link href="#" className='text-gray-500 hover:text-gray-800' aria-label="Facebook">
              <FaFacebook />
            </Link>
            <Link href="#" className='text-gray-500 hover:text-gray-800' aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link href="#" className='text-gray-500 hover:text-gray-800' aria-label="Dribbble">
              <FaDribbble />
            </Link>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Appify",
            "url": "https://www.appify.com",
            "logo": "https://www.appify.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+51 959654654",
              "contactType": "Customer Service",
              "areaServed": "ES",
              "availableLanguage": "Spanish"
            },
            "sameAs": [
              "https://www.facebook.com/Appify",
              "https://twitter.com/Appify",
              "https://dribbble.com/Appify"
            ]
          }),
        }}
      />
    </div>
  )
}

export default Footer;
