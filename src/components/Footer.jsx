import React from 'react';
import github from './../assets/github.svg'

export default function Footer() {
  return (
    <footer className='footer'>
<a href='https://github.com/Ave-Mari/Goal' target="_blank">
    <img src={github} alt={'link to github'}></img>
    </a>   
    <p>2022</p>     
    </footer>
  )
}
