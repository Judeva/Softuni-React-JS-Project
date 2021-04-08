import { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='home'>
               

                    <div className="stars">

                        <div className="central-body">

                        </div>
                        <div className="objects">
                            <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                            <div className="earth-moon">
                                <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                                <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
                            </div>

                        </div>
                        <div className="glowing_stars">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                        </div>

                    </div>

            </div>
        )
    }

}

export default Home;