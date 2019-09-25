import React, {Component, Fragment} from 'react';

import classes from './Layout.module.css';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer};
        });
    }

    render () {
        return(
            <Fragment>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer closed={this.sideDrawerCloseHandler} 
                            open={this.state.showSideDrawer} />
                {/* <div>toolbar, slideDrawer, backdrop</div> */}
                <main className={classes.Content}>
                    <BurgerBuilder/>
                </main>
            </Fragment>
        );
    }
}

export default Layout;