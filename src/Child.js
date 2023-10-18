import React from 'react'

export default function Child(props) {
    const {title,onclick}= props
    //const {onclick}= props
  return (
    <>    
    <h1>{title}</h1>
    <button onClick={onclick}>Change Name</button>
    </>
  )
}
