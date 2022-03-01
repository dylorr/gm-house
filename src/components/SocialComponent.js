import React from 'react';
import logo from '../assets/gmhouse_home.png';
import discord from '../assets/discord-button.png';
import twitter from '../assets/twitter-button.png';
import Lottie from 'react-lottie';
import { Col, Container, Row } from 'react-bootstrap';
import animationData from '../assets/gm-lottie.json';


export default function Social() { 
    return (
        <section>
            <div className= 'two-buttons'> 
                <a href = {'https://discord.gg/gmhouse'}>
                    <img className= 'social-button' src={discord} alt="discord"/>  
                </a>
                <a href = {'https://twitter.com/gmhouseofficial'}>
                    <img className= 'social-button' src={twitter} alt="twitter"/>
                </a>
            </div>   
        </section>
      
    );
  }


   
