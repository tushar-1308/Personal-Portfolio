import React from "react";
import { Container, Row, Col } from "reactstrap";
import './services.css'

const servicesData = [
    {
        icon: 'ri-code-line',
        title: 'web-design',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ratione doloribus? Soluta blanditiis iste eius sequi, cupiditate esse quaerat veniam!"
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'web-design',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ratione doloribus? Soluta blanditiis iste eius sequi, cupiditate esse quaerat veniam!"
    },
    {
        icon: 'ri-qr-code-line',
        title: 'App Development',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ratione doloribus? Soluta blanditiis iste eius sequi, cupiditate esse quaerat veniam!"
    },
    {
        icon: 'ri-search-line',
        title: 'SEO',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ratione doloribus? Soluta blanditiis iste eius sequi, cupiditate esse quaerat veniam!"
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphics design',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ratione doloribus? Soluta blanditiis iste eius sequi, cupiditate esse quaerat veniam!"
    },
    {
        icon: 'ri-gallery-line',
        title: 'UI/UX',
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ratione doloribus? Soluta blanditiis iste eius sequi, cupiditate esse quaerat veniam!"
    }
]

const Services = () => {
    return <section id="services">
        <Container>
            <Row>
                <Col lg='12' className="services__top mb-5">
                    <h6>Features</h6>
                    <h2>What services I provide</h2>
                </Col>
                {
                    servicesData.map((item,index)=>
                    (<Col lg='4' md='6' sm='6' key={index} className='mb-4'>
                        <div className="single__service">
                            <span className="service__icon">
                                <i className={item.icon}></i>
                            </span>

                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </Col>))
                }
                
            </Row>
        </Container>
    </section>
}

export default Services