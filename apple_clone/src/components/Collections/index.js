import React from 'react';
import { Component } from 'react';
import Header from '../Header'


import './index.css'

class Collections extends Component{
    state= {isPopupOpen: false}
    
    togglePopupBackground = (isOpen) => {
        this.setState({isPopupOpen: isOpen})
    }

    render(){
        const {isPopupOpen}= this.state 
       
        const applyBackground= isPopupOpen ? 'applyBackground' : ''
        return(
            <div className={`collections-container ${applyBackground}`} >
                <Header isPopupOpen={isPopupOpen} togglePopupBackground={this.togglePopupBackground}/>
            </div>
        )
    }
}

export default Collections
