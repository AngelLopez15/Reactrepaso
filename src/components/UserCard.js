import React from 'react'

export default function UserCard(props) {

  const { name, username, email } = props

  return (
    <div className='p-4 m-4 shadow-xl'>
      <h1 className='text-center text-xl'>{name}</h1>
      <h2 className='text-center text-lg'>{ username }</h2>
      <p className='text-center text-sm'>{ email }</p>
    </div>
  )
}
