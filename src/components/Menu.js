import React, {Component} from 'react';

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul className="menu">
                    <li className="menu_item"><a>Бытовая техника</a></li>
                    <li className="menu_item"><a>Телевизоры</a></li>
                    <li className="menu_item"><a>Комьютеры</a></li>
                    <li className="menu_item"><a>Ноутбуки</a></li>
                    <li className="menu_item"><a>Сматрфоны</a></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;