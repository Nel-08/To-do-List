import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const listRef = React.useRef(null);

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>Aucune tâche pour le moment. Ajoutez-en une !</p>
      </div>
    );
  }

  const scrollToTop = () => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  const showScrollButtons = todos.length > 3;

  return (
    <div className="todo-list-container">
      {showScrollButtons && (
        <button 
          className="scroll-btn scroll-up" 
          onClick={scrollToTop}
          title="Défiler vers le haut"
        >
          ↑
        </button>
      )}
      
      <div 
        className="todo-list" 
        ref={listRef}
        onScroll={handleScroll}
      >
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>

      {showScrollButtons && (
        <button 
          className="scroll-btn scroll-down" 
          onClick={scrollToBottom}
          title="Défiler vers le bas"
        >
          ↓
        </button>
      )}
    </div>
  );
};

export default TodoList;