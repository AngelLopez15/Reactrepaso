import React from 'react';
import withLoader from './HOC/withLoader';
import UserCard from './UserCard';

function UsuariosGrid({users}) {

  return (
    <div className='flex justify-center flex-wrap'>
      {
        users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        ))
      }
    </div>
  )
}
// asi usamos nuestro componente de orden superior de forma dinamica
export default withLoader('users', UsuariosGrid)