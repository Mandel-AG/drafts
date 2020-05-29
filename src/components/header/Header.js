import React from 'react'
import './header.css'


export default class Header extends React.Component{
    render(){

        return (
            <header className='navbar navbar-expand-lg navbar-light d-flex justify-content-center '>
                <a className='navbar-brand title' href='/'>AG Movies Streaming</a>
                <button className=' navbar-toggler'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                {/* <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item active'>
                        <a className='nav-link' href='/'>Home</a>
                        </li>
                        <li>
                        <a className='nav-link' href='/'>Favoris</a>
                        </li>
                    </ul>

                </div> */}

            </header>

        );
    }
}
