import * as React from 'react';

export const Link = (props) => {
    return (
        <a href={props.href} rel="noopener noreferrer">
            {
                props.children
            }
        </a>
    );
}