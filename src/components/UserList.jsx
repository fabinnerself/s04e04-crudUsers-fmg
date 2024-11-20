import React , { useEffect } from 'react'
import UserCard from './UserCard'
import usePagination from '../hook/usePagination'
import './userList.css'

function UserList({users, openEdit, deleteUser, resetPage, setResetPage}) {

   const itemsPerPage = 10
   const totalItems = users?.length

   const [page, maxPage, onPrev, onNext, currentPageItems, itemBtn, onClickPage] = usePagination(itemsPerPage, totalItems, users)

   useEffect(() => {
      if (resetPage) {
        onClickPage(1)
        setResetPage(false)
      }
    }, [resetPage, onClickPage, setResetPage])
  
   const users_ordered = users?.length ? currentPageItems.sort((a, b) => a.last_name.localeCompare(b.last_name)) : [];

  return (<>
    <div className='cards'>{users_ordered?.map((user) => (
         
        <UserCard key={user?.id} user={user} openEdit={openEdit} deleteUser={deleteUser} />
         
     ))}</div>

      <div className='cards__pagination'>
        <button onClick={() => onClickPage(1)} disabled={page === 1} className='cards__btn'>{'|<'}</button>
        <button onClick={onPrev} disabled={page === 1} className='cards__btn'>{'<'}</button>
        {itemBtn.map((item, index) => (
          <button key={index} onClick={() => onClickPage(item)} disabled={page === item} className='cards__btn'>
            {item}
          </button>
        ))}
        <button onClick={onNext} disabled={page === maxPage} className='cards__btn'>{'>'}</button>
        <button onClick={() => onClickPage(maxPage)} disabled={page === maxPage} className='cards__btn'>{'>|'}</button>
        <p className='cards__page'>{page} / {maxPage}</p>
      </div>
      </>
  )
}

export default UserList