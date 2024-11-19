import React from 'react'
import { AiTwotoneMail } from "react-icons/ai";
import { LuPenLine } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";
import { PiUserSwitchDuotone } from "react-icons/pi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import './card.css'

function UserCard({user, openEdit, deleteUser}) {
  const birthday = new Date(user?.birthday).toLocaleDateString();
  return (<>
    <div  className='card'>
      <h3 className='card__title'>
        <PiUserSwitchDuotone  className='card__icon'/>
        {user?.first_name} {user?.last_name}
      </h3>
      <div className='card__info'>
        <div >
          <span className='card__label'><AiTwotoneMail className='card__icon' />Email: </span>
          {user?.email}
        </div>
        <div >
          <span className='card__label'><LiaBirthdayCakeSolid className='card__icon' />Birthday: </span>
          <span className='card__value'>
          { birthday } </span>
        </div>
      </div>
      <div className='card__btns'>
        <button onClick={() => openEdit(user)} className='btn--edit'><LuPenLine /></button>
        <button onClick={() => deleteUser(user?.id)} className='btn--delete'><FaTrashAlt /></button>
      </div>
    
    </div>
     
    </>
  )
}

export default UserCard