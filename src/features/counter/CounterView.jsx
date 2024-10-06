import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";


const CounterView = () => {
    const count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>{dispatch(increment())}} className="btn bg-slate-400 p-4 rounded-md">Increment</button>
            <button onClick={()=>{dispatch(decrement())}} className="btn bg-slate-200 p-4 rounded-md ml-2">Decrement</button>
            <button onClick={()=>{dispatch(reset())}} className="btn bg-slate-800 p-4 rounded-md ml-2">Reset</button>
            <button onClick={()=>{dispatch(increaseByAmount(5))}} className="btn bg-slate-800 p-4 rounded-md ml-2">Increase By Amount</button>
        </div>
    );
};

export default CounterView;