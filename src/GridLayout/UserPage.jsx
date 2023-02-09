import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Right from "./Components/Right";
import './css/main.css'

const UserPage = (props) => {
    const [Color,setColor]=useState('blue');
    return(
        <React.Fragment>
        <div className="grid-container" style={{backgroundColor: Color}}>
            <Header/>
            <Menu/>
            <Footer/>
            <Main/>
            <Right/>  
            <button onClick={() => {
                setColor('red')
            }}>Red</button>
            <button onClick={() => {
                setColor('black')
            }}>Black</button>
            <button onClick={() => {
                setColor('blue')
            }}>Blue</button>
            <button onClick={() => {
                setColor('green')
            }}>Green</button>
        </div>
        
        </React.Fragment>
    )
}
export default UserPage