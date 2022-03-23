import React from 'react'

function card(props) {
  
  return (
    <div class={props.layout}>
      <div class='max-w-[400px]'>
        <img src={props.img} alt='img' class={props.img_layout}/>
      </div>
      <div class='max-w-[530px] text-center'>
        <h1 class='text-3xl text-primary mb-7'>{props.title}</h1>
        <p class='text-xl text-primary leading-8 mb-6'>{props.text}</p>
        <a href="/" class='link'>{props.link}</a>
      </div>
    </div>
  )
}

export default card