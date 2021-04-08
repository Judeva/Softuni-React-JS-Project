import './About.css'

const About = () => {


    return (

        <div className="bg-purple">
            <div className='about-container' >

                <h4 className="display-2">SPACE CAT</h4>
                <p>SPACE CAT е платформа, в която може да качвате авторски снимки, графични изображения и пр., като можете да харесвате снимки на други автори. </p><br />

                <p>Качването на снимки се случва само след като сте направили регистрация на сайта. Обещаваме, че няма да злоупотребяваме с Вашите данни. И все пак ако не ни вярвате, като гости можете да гласувате и да споделяте. Приятно ползване!</p>
            </div>
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
                        <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
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

export default About;