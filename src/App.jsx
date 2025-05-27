import React, { useState } from 'react';
import TodoForm from './composants/TodoForm';
import TodoList from './composants/TodoList';
import TodoFilters from './composants/TodoFilters';
import './styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Ajouter une nouvelle tâche
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Basculer l'état d'une tâche (terminée/non terminée)
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Supprimer une tâche
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filtrer les tâches selon le filtre sélectionné
  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;
  const totalCount = todos.length;

  const counts = {
    total: totalCount,
    active: activeCount,
    completed: completedCount
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Ma Liste de Tâches</h1>
        <div className="stats">
          {totalCount > 0 ? (
            <>
              {completedCount} sur {totalCount} tâche{totalCount > 1 ? 's' : ''} terminée{completedCount > 1 ? 's' : ''}
              {filter !== 'all' && (
                <span className="filter-indicator">
                  • Affichage : {filter === 'active' ? 'En cours' : 'Terminées'}
                </span>
              )}
            </>
          ) : (
            'Aucune tâche'
          )}
        </div>
      </div>

      <div className="content">
        <TodoForm onAdd={addTodo} />
        
        <TodoFilters 
          currentFilter={filter}
          onFilterChange={setFilter}
          counts={counts}
        />
        
        <TodoList 
          todos={filteredTodos} 
          onToggle={toggleTodo} 
          onDelete={deleteTodo} 
        />
      </div>
    </div>
  );
};

export default App;