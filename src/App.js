import './App.css';

const increment = () => {
  return {type: 'increment'}
}

const decrement = () => {
  return {type: 'decrement'}
}

const initialState = 0;
export const counterReducer = (state = initialState, action) => {
  switch (action.type){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function App(props) {
  const state = props.state;
  const store = props.store;

  const onIncrementButtonClicked = () => {
    store.dispatch(increment())
  }

  const onDecrementButtonClicked = () => {
    store.dispatch(decrement())
  }

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={onIncrementButtonClicked}>+</button>
      <button onClick={onDecrementButtonClicked}>-</button>
    </div>
  );
}

export default App;
