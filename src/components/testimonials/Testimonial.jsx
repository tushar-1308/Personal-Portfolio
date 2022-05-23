import React from "react";
import { Container, Row, Col } from "reactstrap";
import './testimonial.css'

import Slider from "react-slick";

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true
      };

    return <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5 text-center">
                    <h2>What my clients says</h2>
                </Col>

                <Col lg='6' className="m-auto">
                    <Slider {...settings}>
                        <div>
                            <div className="single__testimonial">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam rerum eos eum ipsum eligendi est! Nemo non repellendus voluptates minima, eveniet aliquid asperiores corrupti mollitia beatae voluptatibus voluptas quaerat distinctio voluptatem sapiente debitis! Perferendis animi quo est repellendus autem.</p>
                                <h6>Martin Cooper</h6>
                                <p className="title">web developer</p>
                            </div>
                        </div>

                        <div>
                            <div className="single__testimonial">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam rerum eos eum ipsum eligendi est! Nemo non repellendus voluptates minima, eveniet aliquid asperiores corrupti mollitia beatae voluptatibus voluptas quaerat distinctio voluptatem sapiente debitis! Perferendis animi quo est repellendus autem.</p>
                                <h6>Martin Cooper</h6>
                                <p className="title">web developer</p>
                            </div>
                        </div>

                        <div>
                            <div className="single__testimonial">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nam rerum eos eum ipsum eligendi est! Nemo non repellendus voluptates minima, eveniet aliquid asperiores corrupti mollitia beatae voluptatibus voluptas quaerat distinctio voluptatem sapiente debitis! Perferendis animi quo est repellendus autem.</p>
                                <h6>Martin Cooper</h6>
                                <p className="title">web developer</p>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Testimonials