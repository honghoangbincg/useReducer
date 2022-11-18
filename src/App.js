import { useRef } from "react";
import { useStore, actions } from "./store";
function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const focusInput = useRef();
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(""));
    focusInput.current.focus();
  };
  return (
    <div className="App">
      <input
        type="text"
        ref={focusInput}
        value={todoInput}
        placeholde="Enter your job..."
        onChange={(e) => {
          return dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button onClick={handleAdd}>add</button>
      <ul>
        {todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
