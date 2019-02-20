
import * as React from 'react';

import { Contributor } from './Contributor';

export const Github = (props) => {
    return (
        <>
            {
                props.contributors.map((contributor) => {
                    return (
                        <Contributor {...contributor} additionalKey="github" key={`github-${contributor.name}`}>
                            <p>{contributor.content}</p>
                            <p><a href={contributor.link}>Github</a></p>
                        </Contributor>
                    );
                })
            }
        </>
    )

}
