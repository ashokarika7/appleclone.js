import React from 'react'
import { Component } from 'react'

import './index.css'

class Watch extends Component{

    state= {frontView: true }

    onClickView= () => {
        this.setState(prevState => ({frontView: !prevState.frontView})) 
    }

    render(){
        const {frontView}= this.state 
        const {productDetails,isPopupOpen}= this.props 
    const {watchImg,collectionName,currentPrice,descriptiveProductName,sideView}= productDetails

        const btnTxt= frontView ? 'Side view' : 'Front view'
        const imgUrl= frontView ? watchImg : sideView

        const applyBackgroundInHeader= isPopupOpen ? 'applyBackgroundInHeader' : ''

        return(
            <div className='watch-container' >
            <div className={`header-apple-logo-container ${applyBackgroundInHeader}`}>
            <img alt='apple watch' src={imgUrl} className='watch-img' />
            <div className='header-apple-header-logo-overlay'></div>
            </div>
            <button onClick={this.onClickView} type='button' className='watch-sideview'>
            {btnTxt}
            </button>
            <p className='watch-name' >{collectionName}</p>
            <p className='watch-description' >{descriptiveProductName}</p> 
            <p className='watch-price' >From {currentPrice}</p>
        </div>
        )
    }
}


export default Watch