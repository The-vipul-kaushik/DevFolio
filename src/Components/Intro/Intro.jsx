import React from 'react'
import './Intro.css';
import Github from '../../../public/assets/img/github.png';
import LinkedIn from '../../../public/assets/img/linkedin.png';
import Vector1 from '../../../public/assets/img/Vector1.png';
import Vector2 from '../../../public/assets/img/Vector2.png';
import Vipul from '../../../public/assets/img/Vipul.png';

const Intro = () => {
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span>Hi! I Am</span>
                <span>Vipul Kaushik</span>
                <span>Frontend Developer with high level of experience in webdesigning and development, producing the quality work</span>
            </div>

            {/* <button className='button i-button'>Hire me</button> */}
            <a href="../../../public/assets/docs/Resume_Vipul_Kaushik.pdf" download>
            <button className="button i-button">
                Hire Me
            </button>
            </a>
            <div className='i-icons'>
              <a href="https://github.com/The-vipul-kaushik" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/vipshik15/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
        
        
        </div>

        <div className='i-right'>
          <img src={Vector1}/>
          <img src={Vector2}/>
          <img src={Vipul}/>
        </div>

        <div className='blur' style={{
          background: "rgb(238 210 255)",
          top: '10rem',
          left: '50rem'
          }}></div>
        <div className='blur' style={{
          background: '#C1F5FF',
          top: '30rem',
          width: '21rem',
          height: '11rem',
          left: '20rem'
        }}></div>
        

    </div>
  )
}

export default Intro