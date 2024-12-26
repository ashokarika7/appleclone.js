import React from 'react';
import { IoChevronDown } from "react-icons/io5";
import Popup from 'reactjs-popup'


import {Link} from 'react-router-dom'
import './index.css'

const Header= (props) => {
    const {togglePopupBackground,isPopupOpen}= props

    const applyBackgroundInHeader= isPopupOpen ? 'applyBackgroundInHeader' : ''

    return(
        <nav className='nav-container' >
            <div className='header-link-container' >
<Link className='header-apple-logo-link-el' to='/'>
<div className={`header-apple-logo-container ${applyBackgroundInHeader}`}>
    <img alt='apple logo' className={`header-apple-header-logo ${applyBackgroundInHeader}`} src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&amp;hei=52&amp;fmt=jpeg&amp;qlt=90&amp;.v=1566849941844' />
    <div className='header-apple-header-logo-overlay'></div>
    </div>
</Link>
</div>
<div className='collections-el-container' >

<Popup 
     trigger={
        <button  className='collections-btn'>
        <p className='collections-para'>
        Collections
        </p>
        <IoChevronDown />
    </button>
     }
     onOpen={() => togglePopupBackground(true)}
     onClose={() => togglePopupBackground(false)}
   >
     <div className='react-popup-container' >
       <ul className='popup-ul-container' >
            <li>
                <button type='button' className='popup-btn' >
                Apple Watch Series 10 </button></li>
            <hr />
            <li>
            <button type='button' className='popup-btn' >
                Apple Watch Hermes Series 10</button></li>
            <hr />
            <li>
            <button type='button' className='popup-btn' >
                Apple Watch SE</button></li>
           
       </ul>
     </div>
   </Popup>

    
</div>
   <div>
    <button className={`save-btn ${applyBackgroundInHeader}`} >
        Save
    </button>
    </div>
        </nav>
    )
}

export default Header