import SimpleMap from '../googleMaps/SimpleMap';
import './About.css';

const About = () => {

    return (
        <div className='about-container' >
            <h4 className="display-2">SPACE CAT</h4>
            <p className="display-6">SPACE CAT is a space where you can upload your photos and graphics. You can also browse and like other authors' content. </p><br />
            <p className="display-6">Only registered users can upload files. You can share and like as Guests. Enjoy!</p>
            <div className="navigation-container">
            <SimpleMap/>
            </div>
        </div>

    )
}

export default About;