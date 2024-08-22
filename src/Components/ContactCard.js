import React , {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './contactCard.css' ;
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './imgs/logo.png'; 
import facebook from './imgs/facebook.png';
import instagram from './imgs/instagram.png';
import linkDin from './imgs/linkDin.png';
import Button from "react-bootstrap/Button";



function ContactCard(){
    useEffect(()=> {
        AOS.init({duration:2000});
    }, []);
    return(
        <div className='container7' data-AOS="fade-left">
            <Row className='row1' > 
                <Col className='col1 col col1'>
                <div className='left'>
                <span className='logo-container'>
                    <img src={logo}/>
                    <span className='logo-span'><span className="slash"></span>InnoNexus</span> Hub
                </span>
                </div>
                </Col>
                <Col className='col1 col col2'>
                   <div className='right'>
                    <button>
                        <a href="#"> <img src={facebook}></img></a>
                        </button>
                        <button>
                        <a href="#"> <img src={instagram}></img></a>
                        </button>
                        <button>
                        <a href="#"> <img src={linkDin}></img></a>
                        </button>
                   </div>
                </Col>
            </Row>
            <Row className='row2'>
                <Col className='col1 col'>
                    <p className='title'>Subscribe to get our Newsletter</p>
                    <form>
                        <input placeholder='Your Email' className='input'></input>
                        <Button className='btn'>Subscribe</Button>
                    </form>
                </Col>
            </Row>
            <Row className='row3'>
                <Col className='col1'>
                     <a href='#' className='link1'>Careers</a>
                    <a href='#' className='link2'>Privacy Policy</a>
                    <a href='#' className='link3'>Terms & conditions</a>
               </Col>
            </Row>
            <Row className='footer'>
                <p>2024 design by our company</p>
            </Row>
        </div>
    )
}


export default ContactCard;