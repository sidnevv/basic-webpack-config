import React from 'react';
import './App.scss'

export const App = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(prev => prev + 1);
    return (
        <div>
            <h1>{count}</h1>
            <button type="button" onClick={increment}>button</button>
        </div>
    );
};

