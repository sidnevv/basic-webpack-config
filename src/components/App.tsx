import React from 'react';
import * as classes from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
import WomanPng from '@/assets/woman.png'
import Calendar from '@/assets/calendar.svg'

export const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => setCount(prev => prev + 1);

    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    //
    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }

    return (
        <div data-testid="App.DataTestId">
            <h1 data-testid="Platform.DataTestId">PLATFORM={__PLATFORM__}</h1>
            <div>
                <img width={100} height={100} src={WomanPng} alt=""/>
            </div>
            <div>
                <Calendar style={{color: 'red'}} width={50} height={50}  />
            </div>
            <Link to={'/about'}>about</Link>
            <br />
            <Link to={'/shop'}>shop</Link>
            <h1>{count}</h1>
            <button className={classes.button} type="button" onClick={increment}>button</button>
            <Outlet />
        </div>
    );
};

