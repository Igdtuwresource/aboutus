import { useState } from "react";
import "./App.css";
import download from './download.png';
import hall from './hall.png';
import muskan from './muskan.jpg';
import anamika from './anamika.jpg';
import ridhi from './ridhi.jpg';
import alka from './alka.jpg';
import upasana from './upasana.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <p className="about">ABOUT US</p>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Celestial Biscuit
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Hall of Fame
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Team
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          
          
          <img src={download} height={100} className="cbpic"/>
          <p className="cbd">
          <b>Celestial Biscuit</b> is here to carry forward the ideology of problem solving and innovation with technology for the greater good in our minds, hearts and souls. We are a bunch of enthusiastic people from IGDTUW who are passionate about what we do and take pride in our university, our work and our profession. We are the people who believe in the fact that change is something that doesn't come just by dreaming about it but comes by working hard for it to make it a true reality.
          <div class="social-container">
      <p className="connect"><b>CONNECT WITH US</b></p><br/>
      <a href="https://mobile.twitter.com/cbigdtuw"
        className="twitter social">
        <FontAwesomeIcon icon={faTwitter} className="icons"/>
      </a>
      <a href="https://www.instagram.com/celestialbiscuit/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram}className="icons" />
      </a><a href="https://www.linkedin.com/company/celestial-biscuit-igdtuw/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} className="icons"/>
      </a>
      <a href="https://www.linkedin.com/company/celestial-biscuit-igdtuw/"
        className="email social">
       <FontAwesomeIcon icon="fas fa-envelope"  />
      </a>
</div>
          
          </p>
          
        </div>

        <div
          className={toggleState === 2 ? "content2  active-content" : "content"}
        >
          <img src= {hall}  height={200} className="hallpic" / >
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
<div className="flip-cardr">
  <div className="flip-cardr-inner">
    <div className="flip-cardr-front">
      <img src={ridhi} className="ridhi"/>
    </div>
    <div className="flip-cardr-back">
      <h3 className="all">Ridhi</h3><br/>
      <h4 className="ridhid" >#Web Developer</h4><br/>
      <h4 className="ridhid">Majoring in <br/>Computer Science @ IGDTUW</h4>
      
    </div>
  </div>
</div>
            <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={muskan} height={280} width={250} className="muskan"/>
    </div>
    <div class="flip-card-back">
      <h3 className="all">Muskan</h3><br/>
      <h4 className="muskand">#Web Developer</h4><br/>
      <h4 className="muskand">Majoring in Computer<br/> Science - Artificial<br/>Intelligence @ IGDTUW</h4>
      
    </div>
  </div>
</div>

<div className="flip-carda">
  <div className="flip-carda-inner">
    <div className="flip-carda-front">
      <img src={anamika} height={300} width={250} className="anamika"/>
    </div>
    <div class="flip-carda-back">
      <h3 className="all">Anamika</h3><br/>
      <h4 className="anamikad">#Web Developer</h4><br/>
    <h4 className="anamikad">Majoring in Computer<br/> Science - Artificial<br/>Intelligence @ IGDTUW</h4>
    </div>
  </div>
</div>
         
<div className="flip-cardl">
  <div className="flip-cardl-inner">
    <div className="flip-cardl-front">
      <img src={alka} height={300} width={300} className="alka"/ >
    </div>
    <div className="flip-cardl-back">
      <h3 className="all">Alka</h3><br/>
      <h4 className="alkad">#Web Developer</h4><br/>
      <h4 className="alkad">Majoring in Computer<br/> Science - Artificial<br/>Intelligence @ IGDTUW</h4>
     
    </div>
  </div>
</div>

<div className="flip-cardu">
  <div className="flip-cardu-inner">
    <div className="flip-cardu-front">
      <img src={upasana} height={300} width={300} className="upasana"/ >
    </div>
    <div className="flip-cardu-back">
      <h3 className="all">Upasana</h3><br/>
      <h4 className="upasanad">#Web Developer</h4><br/>
      <h4 className="upasanad">Majoring in <br/>Information <br/>Technology @ IGDTUW</h4>
     
    </div>
  </div>
</div>





        </div>
      </div>
    </div>
  );
}

export default Tabs;