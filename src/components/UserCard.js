import React from 'react'

export default function UserCard(props) {

  const { name, username, email } = props

  return (
    <div>
      <h1>{name}</h1>
      <h2>{ username }</h2>
      <p>{ email }</p>
    </div>
  )
}
