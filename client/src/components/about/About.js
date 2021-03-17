import { render } from "react-dom";
import './About.css'

const About = () => {


    return (
        <div className='about-container' >
            <h1 className='about-title'>ABOUT!</h1>
            <h2>CAT CHASING TAIL</h2>
            <div class="container-sm">
                <div class="row">
                    <div class="col">
                        <p id='about-paragraph'>Защо котките гонят опашките си? Защото им е скучно, разбира се. И на нас ни е скучно. Това е сайт, в който класираме смешни, дебилни, изумителни снимки, реплики, хора, събития и всичко което може да бъде класирано и да му се пoсмеем. Не си гонете опашките, вече имате Cat Chasing Tail! Можете да давате вашите предложения за номинации в различните класации, но само след като се направили регистрация на сайта. Ние няма да злоупотребяваме с данните ви, обещаваме. И все пак ако не ни вярвате, като гости можете да гласувате и да споделяте. Приятно ползване!</p>
                    </div>
                    <div class="col">Column</div>
                </div>
            </div>
        </div>
    )
}

export default About;