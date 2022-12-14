import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sakums from './pages/Sakums'
import Par_mums from './pages/Par_mums'
import Sortiments from './pages/Sortiments'
import Kontakti from './pages/Kontakti'
import Registreties from './components/Registreties'
import Pieslegties from './components/Pieslegties'
import Grozs from './pages/Grozs'
import PievienoPreci from './admin/PievienoPreci'
import Profils from './pages/Profils'
import CRUD from './admin/CRUD'
import EditPreces from './admin/EditPreces'
import Produkts from './pages/Produkts'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from "react"
import { UserContext } from './UserContext'
import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { getUser } from './api/lietotajs'




function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = getUser()
      .then((res) => {
        if (res.error) console.log(res.error)
        else setUser(res.username)
      })
      .catch((err) => console.log(err))

    return () => unsubscribe
  }, [])

  return (

    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Sakums />} />
          <Route path="Par_mums" element={<Par_mums />} />
          <Route path="Sortiments" element={<Sortiments />} />
          <Route path="Kontakti" element={<Kontakti />} />
          <Route path="Produkts" element={<Produkts />} />
          <Route path="Registreties" element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <Registreties />
            )
          }
          />
          <Route path="Pieslegties" element={
            user ? (
              <Navigate replace to="/" />
            ) : (
              <Pieslegties />
            )
          }
          />
          <Route path="admin">
            <Route path="CRUD" element={<CRUD />} />
            <Route path="PievienoPreci" element={<PievienoPreci />} />
            <Route path="EditPreces/update/:id" element={<EditPreces />} />
          </Route>
          <Route path="Profils" element={<Profils />} />
          <Route path="Grozs" element={<Grozs />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </UserContext.Provider>
  );
}

export default App;