import React from 'react';

const Dropdown= (props) => {
  return (
  <div className="dropdown">
    <select className="drop" onChange={props.onChoose} >
      <option value="">Select</option>
      <option value="mggloster">MG GLOSTER</option>
      <option value="mghector">MG HECTOR</option>
      <option value="mgzsev">MG ZS EV</option>
    </select>
  </div>

  );
};
export default Dropdown;