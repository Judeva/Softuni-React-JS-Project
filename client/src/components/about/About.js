import './About.css'

const About = () => {


    return (
        <div className='about-container' >
            <h1 className="display-1">ОТНОСНО</h1>
            <h1 className="display-2">CAT CHASING TAIL</h1>
            <div className="container-sm">
                <div className="row justify-content-sm-center">
                    <div className="col-5" id='about-col1'>
                        <p className='about-paragraph'>Защо котките гонят опашките си? Защото им е скучно, разбира се. И на нас ни е скучно. Това е сайт, в който класираме смешни, изумителни снимки, реплики, хора, събития и всичко което може да бъде класирано и да му се пoсмеем. Не си гонете опашките, вече имате Cat Chasing Tail! </p>
                    </div>
                    <div className="col-5" id='about-col2'>
                    <p className='about-paragraph'>Можете да давате вашите предложения за номинации в различните класации, но само след като сте направили регистрация на сайта. Ние няма да злоупотребяваме с данните ви, обещаваме. И все пак ако не ни вярвате, като гости можете да гласувате и да споделяте. Приятно ползване!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;