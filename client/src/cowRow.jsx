import React from 'react';

const CowRow = ({ name, description, clickHandler }) => {
  return (
    <div className="table-row">
      <div onClick = { () => { clickHandler(name, description) } } className="table-row-name">{name}</div>
    </div>
  );
};

export default CowRow;
