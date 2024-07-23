import { useState } from 'react';
import './Counter.css'
import CounterButton from './CounterButton';
// import Reset from './Reset'

export default function Counter() {

    const[count1, setCount] = useState(0);

    function incrementCount(by) {
        setCount(count1+by);
    }

    function decrementCount(by) {
        setCount(count1-by);
    }

    function resetCount() {
        setCount(0);
    }

    return ( 
        <>  
            <span className="totalCount">{count1}</span>
            <CounterButton incrementMethod={incrementCount} decrementMethod={decrementCount}/>
            <CounterButton by={2} incrementMethod={incrementCount} decrementMethod={decrementCount}/>
            <CounterButton by={5} incrementMethod={incrementCount} decrementMethod={decrementCount}/>
            <button className='resetButton' onClick={resetCount}>Reset</button>
            {/* <Reset resetMethod={resetCount}/> */}
        </>
    )
}

