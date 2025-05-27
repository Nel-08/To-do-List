import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ajouter une nouvelle tâche..."
        className="todo-input"
      />
      <button onClick={handleSubmit} className="add-btn">
        Ajouter
      </button>
    </div>
  );
};

export default TodoForm;