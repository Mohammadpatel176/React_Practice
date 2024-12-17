import React,{useState} from 'react';

const Count=()=>{
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrementCount=()=>{
        setCount(count-1);
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}

export default Count;