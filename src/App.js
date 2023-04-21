import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import { fetchTodos } from './redux/slice/TodoSlice';

function App() {

  const dispatch= useDispatch();
  const handleClick=()=>{
    dispatch(fetchTodos());
  }

  const state=  useSelector((state)=>state);
  if(state.todo.isLoading){
    return <h1>Loading....</h1>
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Fetch Todos</button>
      {state.todo.data && state.todo.data.map(item=>(
          <li>{item.title}</li>
      ))}
    </div>
  );
}

export default App;
