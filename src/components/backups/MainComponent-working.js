import React from 'react'
import logo from '../assets/gmhouse_home.png'
import discord from '../assets/discord.png'
import Lottie from 'react-lottie'
import { Col, Container, Row } from 'react-bootstrap';


function Main(){
    return (
        <section>
                <div class ='container'>
                    <div>
                        <img className= 'Home-logo ' src={logo} alt="Logo" />
                        <a href = {'https://discord.gg/gmhouse'}>
                            <img className= 'row text-center discord' src={discord} alt="discord" href = 'https://discord.gg/bRc9DRbf'/>
                        </a>
                    </div>
                </div>
        </section>
    );
}

export default Main;

