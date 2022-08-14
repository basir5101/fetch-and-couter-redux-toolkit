import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from './counterSlice';
export default function CounterView() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()
    return (
        <div>

            <h1>Count App</h1>
            <h3>Count: {count}</h3>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}
