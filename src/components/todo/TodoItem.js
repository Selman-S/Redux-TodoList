import React from 'react';
import okLogo from '../../assets/ok.png';
import deleteLogo from '../../assets/delete.png';
import { toggleTodo } from '../../redux/actions/todoActions';
import { useDispatch } from 'react-redux';

const TodoItem = ({ completed, text, id }) => {

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleTodo({completed:completed,id:id} )) 
  
  };
  
  
  
  
  
  const handleDelete = () => {};

  const styled = {
    textDecoration: completed ? 'line-through' : 'none',
    backgroundColor: completed ? '#A9A9A9' : 'orange',
    borderRadius: '5px',
  };
console.log(completed, text, id );

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
