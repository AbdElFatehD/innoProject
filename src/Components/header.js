import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import "./header.css";
import logo from './imgs/logo.png'; 
import flag from './imgs/flag.png';
import user from './imgs/user.png';


function header ( ) {
    return (
        <>
        <div className='container-custome'>
          <Navbar bg="bg-white" data-bs-theme="dark" className='nav-style  animation'>
          
              <Navbar.Brand href="#home" className="text-dark " ><span className='logo-size'><span className='logo-span'><span><img src={logo} /></span>InnoNexus</span> Hub</span></Navbar.Brand>
              <Nav className="me-auto">
                
                    <Nav.Link href="#home" className="text-dark font-size margin-custome list-items hover-items"  > الرئيسية</Nav.Link>
                    <Nav.Link href="#features" className="text-dark font-size margin-custome list-items hover-items">التحديات</Nav.Link>
                    <Nav.Link href="#pricing" className="text-dark font-size margin-custome list-items hover-items">شركات</Nav.Link>
                    <Nav.Link href="#pricing" className="text-dark font-size margin-custome list-items hover-items">الرعاة</Nav.Link>
                    <Nav.Link href="#pricing" className="text-dark font-size margin-custome list-items hover-items">من نحن</Nav.Link>
                
                <div className='right-div'>
                    <Button href="#" className='btn-light btn-custome   inside-margin' >تسجيل الدخول</Button>
                    <Button href="#"className='btn-warning btn-custome inside-margin' >  اشتراك </Button>
                    <span ><img src={user} className='inside-margin' /></span>
                    <span ><img src={flag}  className='inside-margin' /></span>
                    </div>
              </Nav>
          </Navbar>
          </div>
          </>
      );
}
export default header;