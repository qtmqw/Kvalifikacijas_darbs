import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaEnvelope,
  FaMobile,
  FaMapMarked
} from 'react-icons/fa';



const Footer = () => {
  return (
    <div className='bg-white shadow-lg max-w-full p-4 '>
      <div class="md:flex md:justify-between   ">
        <a href="/" class="flex mr-5"><img src="abika.svg" className='max-w-[150px]'/></a>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-3 text-sm font-semibold text-black uppercase ">Izvēlne</h2>
            <ul class="text-gray-600 font-medium">
              <li class="mb-2">
                <a href="/Par_mums">Par mums</a>
              </li>
              <li className='mb-2'>
                <a href="/Sortiments">Sortiments</a>
              </li>
              <li>
                <a href="/Kontakti">Kontakti</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-3 text-sm font-semibold text-black uppercase ">Kontakti</h2>
            <ul class="text-gray-600 font-medium">
              <li class="mb-2">
                <div className='flex clex-col'>
                  <FaEnvelope className='w-4 h-5 mr-1' /><a href="mailto:abika@inbox.lv">abika@inbox.lv</a>
                </div>
              </li>
              <li className='mb-2'>
                <div className='flex clex-col'>
                  <FaMapMarked className='w-4 h-5 mr-1' /><a href="">Vagonu iela 23, Rīga</a>
                </div>
              </li>
              <li>
                <div className='flex clex-col'>
                  <FaMobile className='w-4 h-5 mr-1' /><a href="">67382030, 20005038, 29462665</a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-3 text-sm font-semibold text-black uppercase ">Mēs sociālos tīklos</h2>
            <div className='flex justify-between md:w-[50%]'>
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
            </div>
          </div>
        </div>
      </div>
      <hr class=" border-gray-200 sm:mx-auto lg:my-4" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">©2021 Visas tiesības aizsargātas. Jebkāda veida satura pārpublicēšana bez rakstiskas atļaujas stingri aizliegta</span>
      </div>
    </div>
  );
};

export default Footer;
