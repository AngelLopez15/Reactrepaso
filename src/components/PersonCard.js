import React from 'react';

function PersonCard(props) {

  const { first_name, last_name, email, gender, animal } = props

  return (
    <div className='p-4 m-4 shadow-xl'>
      <h1 className='text-center text-xl'>{ first_name } { last_name }</h1>
      <h3 className='text-center text-lg'>{ gender }</h3>
      <p className='text-center text-lg'>{ email }</p>
      <p className='text-center text-sm'>{ animal }</p>
    </div>
  )
}

export default PersonCard;
