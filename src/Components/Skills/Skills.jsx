import React from 'react';
import './Skills.css';
import java from '../../../public/assets/img/java.png';
import springboot from '../../../public/assets/img/springboot.png';
import react from '../../../public/assets/img/react.png';
import javascript from '../../../public/assets/img/javascript.png';
import postgresql from '../../../public/assets/img/postgresql.png';
import html from '../../../public/assets/img/html.png';
import css from '../../../public/assets/img/css.png';
import bootstrap from '../../../public/assets/img/bootstrap.png';
import githublogo from '../../../public/assets/img/githublogo.png';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className='awesome-skills'>
            <span>My Awesome</span>
            <span>Skills</span>
      </div>
      <div className='technologies'>
          <div className='blur' style={{
              background: "rgb(238 210 255)",
              top: '50rem',
              left: '55rem'
              }}>
          </div>
          <div className='techs'>
            <img src={java} className='circle'/>
          </div>
          <div className='techs'>
            <img src={springboot} className='circle'/>
          </div>
          <div className='techs'>
            <img src={postgresql} className='circle'/>
          </div>
          <div className='techs'>
            <img src={html} className='circle'/>
          </div>
          <div className='techs'>
            <img src={css} className='circle'/>
          </div>
          <div className='techs'>
            <img src={javascript} className='circle'/>
          </div>
          <div className='techs'>
            <img src={bootstrap} className='circle'/>
          </div>
          <div className='techs'>
            <img src={react} className='circle'/>
          </div>
          <div className='techs'>
            <img src={githublogo} className='circle'/>
          </div>
          <div className='blur' style={{
            background: '#C1F5FF',
            top: '75rem',
            left: '-4rem',
            zIndex: '2'
          }}></div>
      </div>

      
      
    </div>
  )
}

export default Skills;