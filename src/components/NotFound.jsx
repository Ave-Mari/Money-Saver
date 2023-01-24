import React from 'react'

export default function NotFound({isRussian}) {
  return (
    <div className='not-found'>
      {isRussian ? "Такой страницы не сущетсвует" : "This page doesn't exist"}    
      </div>
  )
}
