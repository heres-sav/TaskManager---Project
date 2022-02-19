import { useEffect, useState } from 'react';
import './App.css';
import { getTodos, setTodos } from './utils/firebaseResources'; 

function App() {
  const [recents, setRecents] = useState({})
  const [todoInput, setInput] = useState(undefined)
  useEffect(() => {
    const fetchTodos = async () => {
      const recents = await getTodos()
      console.log(recents);
      setRecents(recents)
    }
    fetchTodos();
  }, [recents.size])
  return (
    <div className="App">
      <header className="App-header">
        <h1>queue</h1>
      </header>
      {
        Object.keys(recents).map((keyName) => {
          console.log(keyName);
          return (<p>{ keyName + ":" + recents[keyName] }</p>)
        })
      }
      <input
        type="text"
        onChange={ (event) => setInput(event.target.value) }/>
      <input
        type="button"
        value="Add"
        onClick={() => {
          setTodos(todoInput)
        }}
      />
    </div>
  );
}

export default App;
