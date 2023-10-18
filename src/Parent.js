import React, {useState} from 'react'
import Child from './Child';
import Passcomponent from './Passcomponent';

export default function Parent() {
    const [name, setName]=useState('React');
    const changeName=()=>{
      setName('React JS')
    }
  return (
    <Passcomponent>
    <Child title={name} onclick={changeName}/>
    </Passcomponent>
  )
}
