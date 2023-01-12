import React from 'react'
import './../language-switcher.css';


export default function LanguageSwitcher() {
    //  const a = document.querySelector('.check-toggle-round-flat');
    //  console.log(a);
    // // console.log(a.innerHTML);

    // if (a.i)
    const getChecked = (e) => {
        console.log(e.getAttribute(checked));
    }
  return (
        <center>
	<div class="switch">
	    <input id="language-toggle" 
        class="check-toggle check-toggle-round-flat" 
        type="checkbox"
        checked
        onChange={(e) => getChecked(e)}
        />
	    <label for="language-toggle"></label>
	    <span class="ru">🇷🇺</span>
	    <span class="eng">🇬🇧</span>
  	</div>
 </center>
  )
}
