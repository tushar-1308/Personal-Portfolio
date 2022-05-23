import React, {useState} from 'react'
import './about.css'

import { Container, Row, Col } from 'reactstrap'

import aboutImg from '../../assets/images/hero-img.png'
import Education from './Education'
import Skills from './Skills'
import Award from './Award'

const About = () => {
    const [aboutFilter, setAboutFilter] = useState('ABOUT')

    return <section id="about">
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>About me</h2>{" "}
                </Col>

                <Col lg='4' md='3' className="detailNameTable">
                    <div className="about__btns d-flex flex-column align-items-center">
                        <button className={`about__btn ${aboutFilter=='ABOUT'?'about__btn-active':''}`} onClick={()=>setAboutFilter('ABOUT')}>About me</button>
                        <button className={`about__btn ${aboutFilter=='EDUCATION'?'about__btn-active':''}`} onClick={()=>setAboutFilter('EDUCATION')}>Education</button>
                        <button className={`about__btn ${aboutFilter=='SKILLS'?'about__btn-active':''}`} onClick={()=>setAboutFilter('SKILLS')}>Skills</button>
                        <button className={`about__btn ${aboutFilter=='AWARDS'?'about__btn-active':''}`} onClick={()=>setAboutFilter('AWARDS')}>Achievements</button>
                    </div>
                </Col>

                <Col lg='8' md='3' className="dataTable">
                    {
                        aboutFilter=='ABOUT' && (
                            <div className="about__content__wrapper d-flex gap-5">
                                <div className="about__img w-25">
                                    <img src={aboutImg} alt="" className='w-100'/>
                                </div>
                                <div className="about__content w-75">
                                    <h2>I am Tushar Bansal</h2>
                                    <p>Motivated software engineer looking to pursue a 
                                    successful career in Software development at a 
                                    fast paced organization, where I can help in the 
                                    delivery of state-of-the-art software solutions. 
                                    Experience includes coding, troubleshooting, and 
                                    testing for my own personal projects. Relevant skills 
                                    include C++, Python, Core Java, Data Structures, Front 
                                    end dev. with HTML5, CSS3, JavaScript, React and 
                                    Debugging.</p>
                                    <div className="social__links">
                                        <h6 className='mb-3'>Connect with me:</h6>
                                        <span><a href='https://wa.me/+919914550644' target="_blank"><i class="ri-whatsapp-fill"></i></a></span>
                                        <span><a href='mailto:tusharbansal1308' target="_blank"><i class="ri-mail-send-line"></i></a></span>
                                        <span><a href='https://www.github.com/tushar-1308' target="_blank"><i class="ri-github-line"></i></a></span>
                                        <span><a href='https://www.instagram.com/tushar.bansl/' target="_blank"><i class="ri-instagram-line"></i></a></span>
                                        <span><a href='https://www.linkedin.com/in/tusharbansal1308' target="_blank"><i class="ri-linkedin-line"></i></a></span>
                                    </div>
                                </div>
                            </div>
                    )}
                    
                    {
                        aboutFilter=='EDUCATION' && <Education/>
                    }

                    {
                        aboutFilter=='SKILLS' && <Skills/>
                    }

                    {
                        aboutFilter=='AWARDS' && <Award/>
                    }

                    {/* </div> */}
                </Col>
            </Row>
        </Container>
    </section>
}

export default About