import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions/todoActions';

import { toastWarning } from '../../helpers/ToastNotify';
const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
   text ? dispatch(addTodo(text)): toastWarning("Please enter a todo ");  ;

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button style={{cursor:'pointer'}} type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
