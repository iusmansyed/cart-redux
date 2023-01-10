import './App.css';
import { useSelector , useDispatch } from 'react-redux';
import { incNum ,decNum } from './Action';
function App() {
const val = useSelector((state)=> state.changeTheValue)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
      <h1>Hello World</h1>
      </div>
      <div>
        <h1>{val}</h1>
      </div>
      <div className='mainDiv'>
      <div><button className='btn' onClick={()=>dispatch(incNum())}>+</button></div>
      <div><button className='btn' onClick={()=>dispatch(decNum())}>-</button></div>
      </div>
    </div>
  );
}

export default App;
