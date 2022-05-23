import React from "react";
import { Container, Row, Col } from "reactstrap";
import './experience.css'

const developementExperienceData =  [ 
    {
        year: ' July, 2021 - Present',
        title: 'Associate Software Engineer - Accenture',
        desc: "Responsible for writing High level Test scenarios and Test cases in Selenium based on the requirement documents. Performed SIT, UAT, Pre-prod, Regression, Migration, Concurrent & Production Testing."
    },
    {
        year: 'Jan, 2021 - June, 2021',
        title: 'Software Development Engineer Intern - Quark Softwares',
        desc: "Resolved various types of bugs arising in the Layer Palette POD of the QuarkXpress using various types of Data Structures and Algorithms in C++. Also worked on the PBI’s generated on the base of customers reviews and queries."
    },
    {
        year: 'June, 2020 - June, 2020',
        title: 'Virtual Intern - J.P. Morgan & Chase',
        desc: "Worked with Python, Git, Financial Data visualization and Basic programming to make the necessary code changes in a project which analyses the price variation of the stocks and help the traders in fast trading."
    }
]

const Experience = ()=>{
    return(
        <section id="experiences">
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <h2>Experience</h2>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="single__experience-container">
                            {
                                developementExperienceData.map((item, index) => 
                                <div className="single__experience" key={index}>
                                    <span className="experience__icon"><i className="ri-briefcase-line"></i></span>
                                    <h6>{item.year}</h6>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>)
                            }
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="single__experience-container">
                            {
                                developementExperienceData.map((item, index) => 
                                <div className="single__experience" key={index}>
                                    <span className="experience__icon"><i className="ri-briefcase-line"></i></span>
                                    <h6>{item.year}</h6>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>)
                            }
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Experience