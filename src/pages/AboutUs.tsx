import { StepLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import style from './Page.module.scss'

const AboutUs = () => {

  return (
    <Container className={style.AboutPage}>
      <h1 className={style.title}>About Me</h1>
      <p className={style.text}>Hello, my name is Hiếu and I am a fresh graduate from RMIT University Vietnam.
        <br />
        This is my personal project about building the Front-end of a book selling website using
        <span className={style.bold}> ReactJS</span> and
        <span className={style.bold}> TypeScript</span>.
      </p>
      <p className={style.text}>Other libraries that I used are :
        <br />
        <ul>
          <li><span className={style.bold}>redux-tool-kit</span> for state management</li>
          <li><span className={style.bold}>react-hook-form</span> for form validation</li>
          <li><span className={style.bold}>react-bootstrap</span> for UI components</li>
          <li><span className={style.bold}>react-responsive</span> for responsive web design</li>
        </ul>
      </p>
      <p className={style.text}>Thank you itbook.store for providing some APIs for me to get real data from your database.
        <br />
        APIs can be found here:
        <span className={style.bold}>
          <a href={'https://api.itbook.store/'} target="_blank" rel="noopener noreferrer"> https://api.itbook.store/
          </a>
        </span>
      </p>
    </Container>
  );
};

export default AboutUs;
