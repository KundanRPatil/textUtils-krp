import React from 'react'

export default function Footer(props) {
  return (
    <div className='text-center my-3' style={{color: props.mode==='dark'?'white':'black'}}>By <span role="img">❤️</span>KundanRPatil</div>
  )
}
