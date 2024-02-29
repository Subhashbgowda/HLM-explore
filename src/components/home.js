import React from 'react';

const Home = () => {
    return (

        <div>
            <div class="preloader">
                <div class="loader">
                    <div class="loader-outter"></div>
                    <div class="loader-inner"></div>

                    <div class="indicator">
                        <svg width="16px" height="12px">
                            <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                            <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            {/* Slider Area */}
            <section className="slider">
                <div className="hero-slider">
                    {/* Start Single Slider */}
                    <div className="single-slider" style={{ backgroundImage: `url('/img/slider1.png')` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>Let's Join and<span> explore</span> the unexplored places around the <span>Globe!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.</p>
                                        <div className="button">
                                            <a href="#" className="btn">Get Appointment</a>
                                            <a href="#" className="btn primary">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Single Slider */}
                    {/* Start Single Slider */}
                    <div className="single-slider" style={{ backgroundImage: `url('/img/slider2.png')` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>Let's Join and<span> explore</span> the unexplored places around the <span>Globe!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.</p>
                                        <div className="button">
                                            <a href="#" className="btn">Get Appointment</a>
                                            <a href="#" className="btn primary">About Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Single Slider */}
                    {/* Start Single Slider */}
                    <div className="single-slider" style={{ backgroundImage: `url('/img/slide3.png')` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="text">
                                        <h1>Let's Join and<span> explore</span> the unexplored places around the <span>Globe!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam.</p>
                                        <div className="button">
                                            <a href="#" className="btn">Get Appointment</a>
                                            <a href="#" className="btn primary">Conatct Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Single Slider */}
                </div>
            </section>
            {/*/ End Slider Area */}
            {/* Start Schedule Area */}
            <section className="schedule">
                <div className="container">
                    <div className="schedule-inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 ">
                                {/* single-schedule */}
                                <div className="single-schedule first">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="fa fa-ambulance"></i>
                                        </div>
                                        <div className="single-content">
                                            <span>Lorem Amet</span>
                                            <h4>Cases</h4>
                                            <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                                            <a href="#">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                {/* single-schedule */}
                                <div className="single-schedule middle">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-prescription"></i>
                                        </div>
                                        <div className="single-content">
                                            <span>Fusce Porttitor</span>
                                            <h4>Timetable</h4>
                                            <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                                            <a href="#">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-12">
                                {/* single-schedule */}
                                <div className="single-schedule last">
                                    <div className="inner">
                                        <div className="icon">
                                            <i className="icofont-ui-clock"></i>
                                        </div>
                                        <div className="single-content">
                                            <span>Donec luctus</span>
                                            <h4>Opening Hours</h4>
                                            <ul className="time-sidual">
                                                <li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
                                                <li className="day">Saturday <span>9.00-18.30</span></li>
                                                <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
                                            </ul>
                                            <a href="#">LEARN MORE<i className="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*/End Start schedule Area */}
        </div>
    );
}

export default Home;
