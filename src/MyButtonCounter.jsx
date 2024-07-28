// import { useState } from 'react';

export default function MyButtonCounter({ count, setCount }) {


    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
