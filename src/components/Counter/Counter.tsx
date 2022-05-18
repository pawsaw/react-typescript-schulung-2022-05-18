import { useState } from 'react';


async function setTimer(seconds: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(() => resolve(), 1000 * seconds);
    });
}

export const Counter = () => {
    
    const [count, setCount] = useState(0);
    
    const increment = async () => {
        await setTimer(5);
        setCount((currCount: number) => currCount + 1);
        console.log({ count });
    };
    
    return (
        <button onClick={increment}>
        {count}
        </button>
        );
    };
    
    