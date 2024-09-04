// import React from "react";
// const handleChange = (e) => {
//   onChangeType(e.target.value);
// };

// function Filters() {
//   return (
//     <div className="ui form">
//       <h3>Animal type</h3>
//       <div className="field">
//         <select name="type" id="type" aria-label="type">
//           <option value="all">All</option>
//           <option value="cat">Cats</option>
//           <option value="dog">Dogs</option>
//           <option value="micropig">Micropigs</option>
//         </select>
//         <button onClick={onFindPetsClick}>Find pets</button>
//       </div>

//       <div className="field">
//         <button className="ui secondary button">Find pets</button>
//       </div>
//     </div>
//   );
// }

// export default Filters;

// import React from 'react';

// function Filters({ onChangeType, onFindPetsClick }) {
//   const handleChange = (event) => {
//     onChangeType(event.target.value);
//   };

//   return (
//     <div>
//       <select onChange={handleChange}>
//         <option value="all">All</option>
//         <option value="cat">Cats</option>
//         <option value="dog">Dogs</option>
//         <option value="micropig">Micropigs</option>
//       </select>
//       <button onClick={onFindPetsClick}>Find pets</button>
//     </div>
//   );
// }

// export default Filters;
import React from 'react';
const Filters = ({ onChangeType, onFindPetsClick }) => {
  return (
    <div>
      <select onChange={(e) => onChangeType(e.target.value)}>
        <option value="all">All</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="micropig">Micropig</option>
      </select>
      <button onClick={onFindPetsClick}>Find pets</button>
    </div>
  );
};

export default Filters;