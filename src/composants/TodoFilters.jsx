import React from 'react';

const TodoFilters = ({ currentFilter, onFilterChange, counts }) => {
  const filters = [
    { key: 'all', label: 'Toutes', count: counts.total },
    { key: 'active', label: 'En cours', count: counts.active },
    { key: 'completed', label: 'Terminées', count: counts.completed }
  ];

  return (
    <div className="filter-container">
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.key}
            className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.key)}
          >
            {filter.label}
            <span className="filter-count">({filter.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoFilters;