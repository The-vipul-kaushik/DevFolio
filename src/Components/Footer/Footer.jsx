import React from 'react';
import './Footer.css';
import Wave from '../../../public/assets/img/wave.png';
import { UilGithub, UilLinkedin, UilMailbox} from '@iconscout/react-unicons';


const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt='' style={{width: '100%'}}/>
        <div className='f-content'>
            <span>kaushikvipul1501@gmail.com</span>
            <div className='f-icons'>
                <UilLinkedin color='white' size='3rem' />
                <UilMailbox color='white' size='3rem' />
                <UilGithub color='white' size='3rem' />
            </div>
        </div>
    </div>
  )
}

export default Footer;