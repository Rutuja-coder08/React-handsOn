import './App.css';
import Parent from './components/props/Parent';
import MyComponent from './components/eventHandlers/MyComponent'
import List from './components/list&keys/List'
import LoginForm from './components/form/LoginForm';
import AddTodo from './components/todoApp/AddTodo';
function App() {
  return (
    <>
    {/* <div> <Parent/></div>
    <div><MyComponent/></div>
    <div><List/></div>
   <div> <LoginForm/></div> */}
   <AddTodo/>
    </>
  );
}

export default App;
