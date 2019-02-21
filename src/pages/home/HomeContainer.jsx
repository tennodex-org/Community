import * as React from 'react';
import content from '../../assets/json/Contributors.json';

import { Github } from '../../components/contributors/Github';
import { Core } from '../../components/contributors/Core';

export const HomeContainer = () => {

    return (
        <>
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center intro animate-box">
                            <h1>
                                We 💖 our Contributors
                                <div className="owl-carousel3">
                                    <div className="item">
                                        <span>Github</span>
                                    </div>
                                </div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="qbootstrap-work">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                            <span>Contributors</span>
                            <h2>Github</h2>
                        </div>
                    </div>
                    <div className="row">
                        <Github contributors={content.git} />
                    </div>
                </div>
            </div>
            <div className="qbootstrap-work">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                            <span>Creators</span>
                            <h2>Core Team</h2>
                        </div>
                    </div>
                    <div className="row" style={{ textAlign: "center" }}>
                        <Core contributors={content.core} />
                    </div>
                </div>
            </div>
        </>
    );
}
