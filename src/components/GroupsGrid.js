import React from 'react';

export default function GroupsGrid() {
  const groups = [
    { id: 1, name: 'Tech Enthusiasts', desc: 'All about the latest in technology.' },
    { id: 2, name: 'Fitness Friends', desc: 'Workouts, diet and healthy living.' },
    { id: 3, name: 'Book Club', desc: 'Discuss your favourite reads.' },
    { id: 4, name: 'Photography', desc: 'Capture the world through a lens.' }
  ];

  return (
    <div className="row">
      {groups.map(group => (
        <div className="col-sm-6 col-lg-3 mb-4" key={group.id}>
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{group.name}</h5>
              <p className="card-text flex-grow-1">{group.desc}</p>
              <button className="btn btn-primary mt-auto">View Group</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
