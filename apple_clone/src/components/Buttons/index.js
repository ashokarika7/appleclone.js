import React from 'react'
import { Component } from 'react'

import './index.css'

class Buttons extends Component{
    render(){
        const {btnDetails}= this.props 
        const {displayName,options}= btnDetails
        return(
            <li className='btns' >hi</li>
        )
    }
}

export default Buttons