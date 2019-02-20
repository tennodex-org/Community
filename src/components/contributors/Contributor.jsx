
import * as React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Link } from '../link/Link';
import defaultImage from '../../assets/images/default.png';

export const Contributor = (props) => {
    let imageUrl = defaultImage;
    try {
        imageUrl = require(`../../assets/images/${props.image}`);
    }
    catch {
        console.error(props.image);
    }
    return (
        <div className="col-md-3" key={`contributor-${props.additionalKey}-${props.name}`}>
            <div className="work-entry animate-box">
                <Link href={props.link}>
                    <LazyLoadImage
                        alt={props.link}
                        effect="blur"
                        threshold={100}
                        placeholderSrc={defaultImage}
                        src={imageUrl}
                    />
                </Link>
                <div className="col-md-10 col-md-offset-1">
                    <div className="desc">
                        <h2>{props.name}</h2>
                        {
                            props.children
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
