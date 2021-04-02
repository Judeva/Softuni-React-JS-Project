import { Component } from 'react'
import './Home.css'

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex justify-content-center h-100">
                <div className="card" style={{ heigth: '30rem', width: '15rem' }}>
                    
                    <div className="card-body">
                        <h5 className="card-title">ЯДОСАНИ СМЕШНИ КОТКИ</h5>
                        <p className="card-text">Толкова ядосани, че не можем да спрем да се смеем...</p>
                        <a href='details/:id' className="btn btn-primary">Виж класацията</a>
                    </div>
                </div>               
            </div>
        )
    }

}

export default Home;