import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'


const Home= (props) =>{

const goToCollections= () => {
    const {history}= props 
    history.replace('/collections')
}

return(
<div className='home-container'>
    <div className='home-link-container' >
<Link className='apple-logo-link-el' to='/'>
    <img alt='apple logo' className='apple-header-logo' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&amp;hei=52&amp;fmt=jpeg&amp;qlt=90&amp;.v=1566849941844' />
</Link>
</div>
 <div className='home-details-container' >
    <h1 className='details-header' >
        
            <spam className='details-first-title' >
        Apple Watch Studio
        </spam>
        <span> Choose a case. </span>
        <span> Pick a band. </span>
        <span> Create your own style. </span>
    </h1>
    <button type='button' onClick={goToCollections} className='home-btn' >Get started</button>
 </div>
 <div className='home-img-container' role='img'>
    <img className='apple-watch-head-img' alt='apple logo' src=' https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&amp;hei=1000&amp;fmt=png-alpha&amp;.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv' />
    <img  className='apple-case-img' alt='apple case logo' src=' https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&amp;hei=1000&amp;fmt=p-jpg&amp;qlt=95&amp;.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM' />
 </div>
</div>
)}

export default Home