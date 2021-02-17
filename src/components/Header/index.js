import React, { Component } from 'react'
import style from './style.module.css'

export default class Header extends Component {
    render() {
        return (
            <div className='header text-center'>
                <div className={`${style.overplay}`}>
                <h2 style={{color:'#fff',padding:'15px'}}>TRY GLASSES APP ONLINE</h2>
                </div>
            </div>
        )
    }
}
