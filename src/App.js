
import './App.css';
import ToDoItem from "./components/ToDoItem/ToDoItem";
import SearchItem from "./components/SearchItem/SearchItem";


function App() {
  return (
    <div className="App">
        <div>
      <header className="App-header">
          <h1>ToDo List</h1>
          <div className={'info'}>2 more to do, 2 done</div>
      </header>

        <SearchItem description={'type to search'} controls={['Add','Active','Done']} type={'search'}/>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        <SearchItem description={'What needs to be done'} controls={['Add Form']} type={'add'}/>
    </div>
    </div>
  );
}

export default App;
