import { Component } from 'react'
import './Home.css'

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="d-flex justify-content-center h-100">
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://web.static.btv.bg/np_2021.jpg" className="card-img-top" alt="parliament"></img>
                    <div className="card-body">
                        <h5 className="card-title">ИЗРОДИ 2021</h5>
                        <p className="card-text">Най-добрите предложения за народни представители.</p>
                        <a href="/addNomination" className="btn btn-primary">Виж класацията</a>
                    </div>
                </div>               
            </div>
        )
    }

}

export default Home;