
import React, { useEffect, useRef } from 'react'
import './modal.css'

function Modal({ isOpen, setIsOpen, children }) {
    const modelRef = useRef()

    useEffect(()=>{
        const modal = modelRef.current

        const modalClose = (e) => {
            if(modal && !modal.contains(e.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', modalClose) 

        return () => {
            document.removeEventListener('mousedown', modalClose)
        }
    },[])
  return (
    <div className={`modal${isOpen ? ' show--modal' : ''}`}>
        <div className='modal--overlay'>
            <div ref={modelRef} className='modal__container'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal