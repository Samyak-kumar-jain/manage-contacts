
import { useState } from 'react'
import './App.css'
import Add from './components/add'
import Header from './components/header'
import Contactlist from './components/contactlist'



function App() {
  const [contact,setCont] = useState([])

  const addContact = (data)=>{
    setCont([...contact,data])
  }
 

  return (
    <>
    <Header></Header>
    <Add addContact = {addContact}></Add>
    <Contactlist contact = {contact}></Contactlist>
      
    </>
  )
}

export default App
