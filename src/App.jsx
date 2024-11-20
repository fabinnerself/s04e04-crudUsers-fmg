import React, { useState , useEffect } from 'react'
import useFetch from './hook/useFetch'
import Layout from './layouts/Layout'
import AddEdit from './components/AddEdit'
import UserList from './components/UserList'
import Modal from './components/Modal'
import Search from './components/Search'

import { FiLoader } from "react-icons/fi";
import { RiUserAddLine } from "react-icons/ri";
import { FcOk } from "react-icons/fc";

import { filtrarUsuarios } from './assets/js/searchUser'
import { header } from './assets/img'
import './App.css' 

const baseURL = "https://users-crud-api-81io.onrender.com/api/v1"

function App() { 

   const [users, setUsers, loading] = useFetch()
   const [isOpen, setIsOpen] =  useState(false)
   const [currentChild, setCurrentChild] =  useState(null)
   const [queryUser, setQueryUser] = useState("")
   const [filteredUsers, setFilteredUsers] = useState([])

   /* reset page */
   const [resetPage, setResetPage] = useState(false);

   useEffect(() => {
      readUsers()      
   }, [])

   useEffect(() => {      
   
      if (users && queryUser) {
         console.log("APP queryUser ",queryUser)
         const filtered = filtrarUsuarios(users, queryUser)
         setFilteredUsers(filtered)   
         setResetPage(true)      
      }  
      else {
         setFilteredUsers(users)
      }
      
   },[users,queryUser])


   const handleSearch = (searchTerm) => {
      setQueryUser(searchTerm)
    }   

   const cancelDelete = () => {
      setIsOpen(false)
   }

   const confirmDelete = (userId) => {
      console.log(userId)
      setUsers({
         url:`${baseURL}/users/`, 
         method: 'delete',
         id:   userId  
      })
      setIsOpen(false)
   }

   const deleteUser = (userId) => {
      
      setIsOpen(true)
      setCurrentChild(
         <div className='header__modal'> 
            <h2 className='header__modal-text'>Confirm Delete</h2> 
            <p>Are you sure you want to delete </p>  
            <p>the register of the user ?</p> 
            <p className='header__space'> &nbsp;</p>             
            <div className="header__actions">     
               <button onClick={() => confirmDelete(userId)} className="header__confirm">Delete</button>   
               <button onClick={cancelDelete} className="header__close-button">Cancel</button> 
            </div> 
         </div>
      ) 
   }   


   const updateUser = (dataForm, userId) => {
      console.log('dataForm app ',dataForm)
      setUsers({
         url:`${baseURL}/users/`, 
         method: 'patch',
         body: dataForm,
         id:   userId  
      })
      setIsOpen(false)
      
      setIsOpen(true)
      setCurrentChild(
         <div className='header__modal'> 
            <h2 className='header__modal-text'>Update Completed</h2> 
            <p>User record has been </p> 
            <p>updated successfully</p>
            <p className='header__space'> &nbsp;</p>
            <p><FcOk className='btn__icon-large' /></p> 
         </div>
      )
      
      setTimeout(() => {
         setIsOpen(false)
      }, 2000)
      
   }

   const createUser = (dataForm) => {
      console.log('dataForm app ',dataForm)
      setUsers({
         url:`${baseURL}/users`, 
         method: 'POST',
         body: dataForm
      })
      setIsOpen(false)

      
      setIsOpen(true)
      setCurrentChild(
         <div className='header__modal'> 
            <h2 className='header__modal-text'>Creation Completed</h2> 
            <p>User record has been </p> 
            <p>added successfully</p>
            <p className='header__space'> &nbsp;</p>
            <p><FcOk className='btn__icon-large' /></p> 
         </div>
      )
      
      setTimeout(() => {
         setIsOpen(false)
      }, 2000)
          
   }

   const readUsers = () => {
      setUsers({url:`${baseURL}/users`})
  }

  const openEdit = (user) => {     
   setIsOpen(true)
   setCurrentChild(<AddEdit user={user} operateUser={updateUser} />) 
}


  const openAdd = () => {   
   console.log("first")  
     setIsOpen(true)
     setCurrentChild(<AddEdit operateUser={createUser} />)
      
  }
 
  return (
     <>
     <Layout>
      <div  className='header'>
         <div className='header__container'>
            <div>
               <h1 className='header__title'>User's APP</h1> 
               <div  >Number of records: {filteredUsers?.length}</div>
               <Search setQueryUser={handleSearch} />
            </div>
            
            <div className='header__button'>
               <button className='btn' onClick={openAdd}><RiUserAddLine  className='btn__icon' /> <span className='btn__text'>Add</span></button>
            </div>
           
         </div>
         
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {currentChild}
      </Modal>
      <div>
         {loading ? (<h1 className='header__loading'><FiLoader />Loading...<FiLoader /></h1>) : (<UserList users={filteredUsers} openEdit={openEdit} deleteUser={deleteUser} resetPage={resetPage} setResetPage={setResetPage} />)}
      </div> 
        </Layout>
        
     </>
  )
}

export default App
