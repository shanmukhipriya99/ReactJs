import React from 'react';
import Aux from '../../hoc/Auxiliary';

const layout = (props) => (
    <Aux>
        <div>
        toolbar, sidedrawer, backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;