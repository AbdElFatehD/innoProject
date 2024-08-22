import React , {useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './partecepate.css' ;
import AOS from 'aos';
import 'aos/dist/aos.css';
import Partici from './imgs/partici.png'

function Partecepate() {
    useEffect(()=> {
        AOS.init({duration:2000});
    }, []);
    return (
        <div className='container2'>
            <Row>
                <Col className='col col1' data-aos='fade-right'>
                    <span className='shape'>.</span>
                    <p className='title'>طريقة المشاركة</p>
                    <p className='descreption' >TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                </Col>
                <Col className='col' data-aos='fade-left'><img src={Partici}/></Col>
            </Row>
          </div>
    );
}

export default Partecepate;