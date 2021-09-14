import { Container, Col } from "react-bootstrap";
import style from './Footer.module.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {

  return (
    <footer className={style.footer}>
      <Container>
        <h3 className={style.heading}>You can find me at</h3>
        <Col md={4} lg={4} className={style.col}>
          <a href="https://www.linkedin.com/in/thienhieu215/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className={style.icon} />
          </a>
          <a href="https://github.com/thienhieu215" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className={style.icon} />
          </a>
          <a href="https://www.facebook.com/thienhieu215/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className={style.icon} />
          </a>
          <a href="https://www.instagram.com/thienhieu.ng/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={style.icon} />
          </a>
        </Col>
        <div className={style.last}>
          <div>&copy; 2021 Hieu Nguyen, Ho Chi Minh City, Vietnam</div>
          <div>thienhieu215@gmail.com | +84 0915209318</div>
        </div>
      </Container>


    </footer>
  )
}

export default Footer;
