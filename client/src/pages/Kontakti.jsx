import React, { useState } from 'react'
import {
    FaEnvelope,
    FaMobile,
    FaMapMarked
} from 'react-icons/fa'
import { Container } from 'react-bootstrap'

const kont = () => {

    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    console.log(name)
    console.log(tel)
    console.log(email)
    console.log(text)


    return (
        <Container fluid className='py-16 max-w-[2000px] mx-auto'>

            <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold py-[90px] text-center my-5 '>Kontakti</h1>

            <div className='w-auto flex mb-5 justify-end'>
                <div className='flex clex-col md:mx-auto xl:mx-0'>
                    <FaMobile className='xl:w-4 xl:h-9 mx-1' /><a href="" className='md:text-md sm:text-sm xl:text-2xl xl:mr-10 lg:mr-10 md:mr-10'><p>67382030, 20005038, 29462665</p></a>
                    <FaEnvelope className='xl:w-6 xl:h-10 mx-1' /><a href="mailto:abika@inbox.lv" className='md:text-md sm:text-sm xl:text-2xl xl:mr-10 lg:mr-10 md:mr-10 sm:mr-3'><p>abika@inbox.lv</p></a>
                    <FaMapMarked className='xl:w-6 xl:h-9 mx-1' /><a href="" className='md:text-md sm:text-sm xl:text-2xl'><p>Vagonu iela 23, Rīga</p></a>
                </div>
            </div>

            <div className=' mx-auto mb-10'>
                <iframe width="100%" height='500px' frameborder="0" scrolling="yes" src="https://maps.google.com/maps?width=683&amp;height=400&amp;hl=en&amp;q=Abika&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>

            <div className='w-auto grid lg:grid-cols-2 md:grid-cols-1'>

                <div className='flex flex-col text-lg mb-5'>
                    <p><span className='font-bold'>SIA Abika adrese:</span>Vagonu iela 23, Rīga, LV-1009</p>
                    <p><span className='font-bold'>Epasts:</span> abika@inbox.lv</p>
                    <p><span className='font-bold'>Telefons:</span>67382030, 20005038, 29462665</p>
                    <p className='mt-2'><p className='font-bold'>Darba laiks:</p>Darba dienās no plkst. 9.00 līdz 17.00</p>
                    <p className='mt-10'><p className='font-bold'>Rekvizīti:</p>SIA Abika</p>
                    <p>LV–40003600614</p>
                    <p>Juridiskā adrese: Pulkveža Brieža iela 93–4, Sigulda, LV–2150   Faktiskā adrese: Vagonu iela 23, Rīga, LV-1009</p>
                    <p>Swedbanka, HABALV22</p>
                    <p>LV70HABA0551003890106</p>
                </div>

                <div className='w-full shadow-xl bg-gray-300 relative flex flex-col p-4 md:my-0 my-8 rounded-lg'>

                    <h2 className='text-2xl font-bold mb-5'>Jautājiet mums</h2>
                    <form action="https://formsubmit.co/maikls303@gmail.com" method="POST">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full  px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    <p className='mb-2'>Vārds, Uzvārds</p>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                     type="text" placeholder="Maikls Ozoliņš" onChange={(e) => setName(e.target.value)}/>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
                                        <FaMobile className='w-4 h-4 mr-1' /><p className='mb-2'>Telefons</p>
                                    </div>
                                    <input className="appearance-none block w-full bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                     type="text" placeholder="+371 67382030" onChange={(e) => setTel(e.target.value)}></input>
                                </label>
                            </div>

                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    <div className='w-auto mx-auto my-auto max-w-auto flex clex-col'>
                                        <FaEnvelope className='w-4 h-4 mr-1' /><p className='mb-2'>E-pasts</p>
                                    </div>
                                    <input required className="appearance-none block w-full bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                     type="email" name='email' placeholder="abika@inbox.lv" onChange={(e) => setEmail(e.target.value)}></input>
                                </label>
                                <p className="text-red-500 text-xs italic font-bold">Lūdzam aizpildīt šo lodziņu</p>
                            </div>

                            <div className="w-full h-[200px] px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    <p className='mb-2'>Ziņa</p>
                                    <textarea className="w-full mx-auto bg-white text-gray-700 border rounded form-control block px-3 py-1.5 text-base font-normal transition ease-in-out m-0"
                                    onChange={(e) => setText(e.target.value)}/>
                                </label>
                                <p className="text-red-500 text-xs italic font-bold">Lūdzam aizpildīt šo lodziņu</p>
                            </div>
                        </div>
                    </form>
                    <button className='bg-black text-white w-[150px] rounded-md font-medium  py-3 absolute bottom-0 right-0 mb-4 mr-4' type="submit">Nosūtīt</button>
                </div>
            </div>
        </Container>

    )
}

export default kont