import { Component } from 'react'

class Nav extends Component {

    render() {
        return (
            <ul className="nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Начало</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/login">Вход</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/logout">Изход</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/register">Регистрация</a>
                </li>
            </ul>
        )
    }

}

export default Nav;