import React, {Fragment} from 'react';

import classes from './Layout.module.css';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

const layout = ( props ) => (
    <Fragment>
        <div>toolbar, slideDrawer, backdrop</div>
        <main className={classes.Content}>
            <BurgerBuilder/>
        </main>
    </Fragment>
);

export default layout;