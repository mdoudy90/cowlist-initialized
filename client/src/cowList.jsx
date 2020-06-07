import React from 'react';
import CowRow from './CowRow';

const CowList = ({ cows, clickHandler }) => {
  return (
    <div className="table">
      <CowRow name={'Name'} description={null} clickHandler={ () => {} }/>
      {cows.map((row) => {
        return <CowRow name={row.name} description={row.description} clickHandler={ clickHandler }/>;
      })}
    </div>
  );
};

export default CowList;
