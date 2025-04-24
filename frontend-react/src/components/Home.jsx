import React from 'react'
import Button from './button'
import Header from './header'


const home = () => {
  return (
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className='text-light lead'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nisi natus beatae esse nihil accusantium voluptate nam, distinctio illo id cum totam necessitatibus, dolorum labore? Iure consequuntur aperiam animi ea!</p>
        <Button text="Login" class="btn-outline-info"/>
      </div>
    </div>
  )
}

export default home