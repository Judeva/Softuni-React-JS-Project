import { Component } from 'react'
import './Login.css'

class Login extends Component {

    render() {
        return (

            <body>
                <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
                        <div class="user_card">
                            <div class="d-flex justify-content-center">
                                <div class="brand_logo_container">
                                    <img src="https://svgshare.com/i/V59.svg" class="brand_logo" alt="Logo"></img>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center form_container">
                                <form>
                                    <div class="input-group mb-3">
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <input type="text" name="" class="form-control input_user" value="" placeholder="username"></input>
                                    </div>
                                    <div class="input-group mb-2">
                                        <div class="input-group-append">
                                            <span class="input-group-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <input type="password" name="" class="form-control input_pass" value="" placeholder="password"></input>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customControlInline"></input>
                                            <label class="custom-control-label" for="customControlInline">Запомни ме</label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center mt-3 login_container">
                                        <button type="button" name="button" class="btn login_btn">Вход</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default Login;