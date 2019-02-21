import * as React from 'react';

export const Menu = (props) => {

    const closeMenu = () => {
        props.setMenuOpen(false)
    }

    return (
        <>
            {
                props.isMenuOpen &&
                <div className="full-page" onClick={closeMenu} />
            }
            <nav className="qbootstrap-main-nav" role="navigation">
                <a href="#" onClick={closeMenu} className="js-qbootstrap-nav-toggle qbootstrap-nav-toggle active show"><i></i></a>
                <div className="js-fullheight qbootstrap-table">
                    <div className="qbootstrap-table-cell js-fullheight">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="qbootstrap-navbar-brand">
                                    <a className="qbootstrap-logo" href="/">Menu</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul>
                                    {
                                        props.menuItems.map((item) => {
                                            return (
                                                <li key={`menuItem-${item.id}`}>
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
