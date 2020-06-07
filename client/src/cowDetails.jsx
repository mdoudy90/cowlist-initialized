import React from 'react';

const CowDetails = ({ name, description }) => {
  return (
    <div className="cow-details">
      <div><i><b>*Details</b></i></div>
      <div className="cow-details-name"><i>Name: { name }</i></div>
      <div className="cow-details-desc"><i>Description: { description }</i></div>
    </div>
  );
};

export default CowDetails;
