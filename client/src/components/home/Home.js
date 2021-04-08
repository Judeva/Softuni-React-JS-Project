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
                            <div className="box_astronaut">
                            <img className="object_astronaut" src="https://firebasestorage.googleapis.com/v0/b/cat-chasing-tail.appspot.com/o/cat-space-01.svg?alt=media&token=b08f7866-6c14-4c1c-83f2-6043746ea5ff" width="140px" />
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