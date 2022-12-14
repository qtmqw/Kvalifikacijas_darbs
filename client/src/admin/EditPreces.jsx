import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { editR } from '../utils/APIRoutes'
import { BsFillCloudUploadFill } from 'react-icons/bs'
const Edit = () => {

    const [newNosaukums, setNewNosaukums] = useState('')
    const [newApraksts, setNewApraksts] = useState('')
    const [newfileName, setNewFileName] = useState('')
    const [newKrasa, setNewKrasa] = useState('')
    const [newCena, setNewCena] = useState('')

    const onChangeFile = e => {
        console.log(e.target.files[0])
        setNewFileName(e.target.files[0])
    }

    const changeOnClick = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("Attels", newfileName);
        formData.append("Nosaukums", newNosaukums);
        formData.append("Apraksts", newApraksts);
        formData.append("Krasa", newKrasa);
        formData.append("Cena", newCena);

        axios.put(`${editR}`, formData)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Container fluid className='max-w-[1000px]'>

                <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold pt-[90px] text-center my-5 '>Labot Preci</h1>
                <form onSubmit={changeOnClick} encType='multipart/form-data'>
                    <div className='py-[140px]'>
                        <div className='w-full mb-4 bg-gray-300 p-10 rounded-lg relative '>
                            <form >
                                <div className="mb-6">
                                    <div className="px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-md">
                                            <p className='mb-2 font-bold' htmlFor="Nosaukums">Nosaukums</p>
                                            <input className="w-full mx-auto bg-white text-gray-700 border form-controlk rounded py-3 px-4 mb-3"
                                                required value={newNosaukums} type="text" placeholder='Nosaukums' onChange={e => setNewNosaukums(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-md">
                                            <p className='mb-2 font-bold' htmlFor="Apraksts">Apraksts</p>
                                            <textarea className="w-full mx-auto bg-white text-gray-700 border rounded form-control block px-3 py-1.5 text-base font-normal transition ease-in-out m-0"
                                                id="exampleFormControlTextarea1" rows="3" required value={newApraksts} type="text" placeholder='Apraksts . . . ' onChange={e => setNewApraksts(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="px-3 mb-6 md:mb-0">
                                        <label htmlFor='file' className="block uppercase tracking-wide text-gray-700 text-md">
                                            <p className='mb-2 font-bold'>Attels</p>
                                            <div className='flex'>
                                                <BsFillCloudUploadFill className='h-10 w-10' /> <span className='ml-5'>Ievietojiet bildi</span>
                                                <input type='file' filename='Attels' className='form-control-file' onChange={onChangeFile}/>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-md">
                                            <p className='mb-2 font-bold' htmlFor="Krasa">Krasa</p>
                                            <input className="w-full mx-auto bg-white text-gray-700 border form-control rounded py-3 px-4 mb-3"
                                                required value={newKrasa} type="text" placeholder='Krasa' onChange={e => setNewKrasa(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-md">
                                            <p className='mb-2 font-bold' htmlFor="Cena">Cena</p>
                                            <input className="w-full mx-auto bg-white text-gray-700 border form-control rounded py-3 px-4 mb-3"
                                                required value={newCena} type="number" placeholder='Cena' onChange={e => setNewCena(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                </div>

                            </form>
                            <button className='bg-black text-white w-full rounded-xl font-medium my-2 mx-auto px-10 py-3'
                            >
                                Pievienot
                            </button>
                        </div>
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Edit