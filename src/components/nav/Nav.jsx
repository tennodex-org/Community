import * as React from 'react';

export const Nav = (props) => {

    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="qbootstrap-navbar-brand">
                            <a className="qbootstrap-logo" href="/">TennoDex Community</a>
                        </div>
                        <a href="#" onClick={() => props.setMenuOpen(true)} className="js-qbootstrap-nav-toggle qbootstrap-nav-toggle"><i></i></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

