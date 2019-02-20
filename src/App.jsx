import * as React from 'react';

import { Nav } from './components/nav/Nav';
import { Menu } from './components/nav/Menu';

import { HomeContainer } from './pages/home/HomeContainer';

export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false,
            menuItems: [{
                id: 1,
                title: 'Home',
                link: ''
            }, {
                id: 2,
                title: 'About',
                link: ''
            }, {
                id: 3,
                title: 'TennoDex',
                link: ''
            }, {
                id: 4,
                title: 'Kurt Lourens',
                link: ''
            }]
        };
    }

    setMenuOpen = (isOpen) => {
        if (isOpen) document.body.classList.add('menu-show');
        else document.body.classList.remove('menu-show');

        this.setState(state => ({
            isMenuOpen: isOpen
        }));
    };

    render() {
        return (
            <>
                <Menu
                    setMenuOpen={this.setMenuOpen}
                    menuItems={this.state.menuItems}
                    isMenuOpen={this.state.isMenuOpen}
                />
                <div id="qbootstrap-page">
                    <Nav
                        setMenuOpen={this.setMenuOpen}
                    />
                    <HomeContainer />
                </div>

            </>
        );
    }
}
