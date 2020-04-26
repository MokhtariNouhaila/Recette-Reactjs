import React, { Component } from 'react'
import Clock from './Clock'

class Header extends Component {
    render() {
        return (
            <div>
               <di><Clock className="Header-clock"/></di> 
                <h1 className="head" >Nos recettes</h1>
            </div>
        )
    }
}
export default  Header;