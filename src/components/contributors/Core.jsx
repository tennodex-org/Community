
import * as React from 'react';

import { Contributor } from './Contributor';

export const Core = (props) => {
    return (
        <>
            {
                props.contributors.map((contributor) => {
                    return (
                        <Contributor {...contributor} additionalKey="core" key={`core-${contributor.name}`}>
                            <p>{contributor.role}</p>
                        </Contributor>
                    );
                })
            }
        </>
    )

}
