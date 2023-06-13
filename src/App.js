// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask />
        <ListTasks />
      </div>
    </Provider>
  );
}

export default App;

