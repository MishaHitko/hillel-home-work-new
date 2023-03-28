import React, {Component} from 'react';
import Logo from '../img/Minions_characters.png'
class Header extends Component {
    render() {
        return (
       <header className="header">
           <div className="header__title-logo">
               <h1>Магазин техники "Миньон технолог"</h1>
              <img src={Logo} />
           </div>
       </header>
        );
    }
}

export default Header;