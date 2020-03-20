import React, { Component } from 'react';
import '../../css/home.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: this.props.data
        }
    }

    render() {
        let events = Object.values(this.state.events)
        let firstSlide = events[0]
        let secondSlide = events[1]
        let thirdSlide = events[2]
        let fourthSlide = events[3]

        return (


            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">

                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img className="d-block w-100" src="../../assets/event1.png" alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{firstSlide.name}</h5>
                            <p>{firstSlide.description}</p>
                        </div>

                    </div>

                    <div className="carousel-item">

                        <img className="d-block w-100" src="../../assets/event2.png" alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{secondSlide.name}</h5>
                            <p>{secondSlide.description}</p>
                        </div>

                    </div>

                    <div className="carousel-item">

                        <img className="d-block w-100" src="../../assets/event3.png" alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{thirdSlide.name}</h5>
                            <p>{thirdSlide.description}</p>
                        </div>

                       
                    </div>

                    <div className="carousel-item">

                            <img className="d-block w-100" src="../../assets/event4.png" alt="Fourth slide" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{fourthSlide.name}</h5>
                                <p>{fourthSlide.description}</p>
                            </div>

                        </div>

                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        );
    }
}

export default Home;