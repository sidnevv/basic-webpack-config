import React from 'react';
import * as classes from './App.module.scss'

export const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const increment = () => setCount(prev => prev + 1);
    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.button} type="button" onClick={increment}>button</button>
        </div>
    );
};

