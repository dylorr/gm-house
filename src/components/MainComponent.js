import React from 'react';
import logo from '../assets/gmhouse_home.png';
import discord from '../assets/discord-button.png';
import twitter from '../assets/twitter-button.png';
import Lottie from 'react-lottie';
import { Col, Container, Row } from 'react-bootstrap';
import animationData from '../assets/gm-lottie.json';


export default function App() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
        <section>
            <div>
                <Lottie options={defaultOptions} height='50%' width='100%'/>
            </div>
        </section>
      
    );
  }

