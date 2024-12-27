import React from 'react';
import { Component } from 'react';
import Header from '../Header'
import Watch from '../Watch'
import Buttons from '../Buttons'


import './index.css'

class Collections extends Component{
    state= {isPopupOpen: false, collection: 'apple-watch',productDetails: [], sectionDetails:[]}

    componentDidMount(){
        this.getProducts()
    }
    
    togglePopupBackground = (isOpen) => {
        this.setState({isPopupOpen: isOpen})
    }

    updateCollection= (type) => {
        this.setState({collection: type}, this.getProducts)
    }


    updateProductDetails= (data) => {
        const details= {
            watchImg: data.kitImage.srcSet.src,
            collectionName: data.collectionName,
            currentPrice: data.currentPrice,
            descriptiveProductName: data.descriptiveProductName,
            sideView: data.kitAltImage.srcSet.src,
        }
        return details
    }

    getProducts= async() => {
        const {collection}= this.state 
        const url= `/api/shop/studio-data?collection=${collection}`
        const response= await fetch(url)
        const data= await response.json()
        const updateDetails= this.updateProductDetails(data.body.defaultProduct)
       
        const updateSections= data.body.sections.map(data => ({
            displayName: data.displayName,
            key: data.key,
            options: data.options,
        }))
        console.log(data.body)
        this.setState({productDetails: updateDetails,sectionDetails:updateSections})
    }


    render(){
        const {isPopupOpen,productDetails,sectionDetails}= this.state 
        console.log(sectionDetails[0])
        const applyBackground= isPopupOpen ? 'applyBackground' : ''
        return(
            <div className={`collections-container ${applyBackground}`} >
                <Header isPopupOpen={isPopupOpen} updateCollection={this.updateCollection} togglePopupBackground={this.togglePopupBackground}/>
                <Watch isPopupOpen={isPopupOpen} productDetails={productDetails} />
                <div className='buttons-container' >
                <ul className='btns-ul-container' >
                {
                    sectionDetails.map(data => 
                        <Buttons key={data.key} btnDetails={data} />
                    )
                }
                </ul>
                </div>
            </div>
        )
    }
}

export default Collections
