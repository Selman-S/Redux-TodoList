import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearTodo } from '../../redux/actions/todoActions';

import { toastSuccess } from '../../helpers/ToastNotify';
const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoRed.todoList);

  const handleClearList = () => {
    dispatch(clearTodo());
    toastSuccess('Cleared all todos')
  };

  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
  
           
        ))}
      </div>
      <div className="clear-wrapper">
        <button style={{cursor:'pointer'}} onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
