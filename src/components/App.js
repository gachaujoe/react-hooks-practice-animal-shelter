// import React, { useState } from "react";

// import Filters from "./Filters";
// import PetBrowser from "./PetBrowser";
// import data from "./db.json";


// function App() {
//   const [pets, setPets] = useState([]);
//   const [filters, setFilters] = useState({ type: "all" });
//   const handleChangeType = (type) => {
//     setFilters({ type });
//   };
//   const handleFindPetsClick = () => {
//     let filteredPets = data.pets;
//     if (filters.type !== 'all') {
//       filteredPets = data.pets.filter(pet => pet.type === filters.type);
//     }
//     setPets(filteredPets);
//   };
//   const handleAdoptPet = (id) => {
//     setPets(pets.map(pet => pet.id === id ? { ...pet, isAdopted: true } : pet));
//   };
//   return (
//     <div>
//       <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick} />
//       <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
//     </div>
//   );
  

//   return (
//     <div className="ui container">
//       <header>
//         <h1 className="ui dividing header">React Animal Shelter</h1>
//       </header>
//       <div className="ui container">
//         <div className="ui grid">
//           <div className="four wide column">
//             <Filters />
//           </div>
//           <div className="twelve wide column">
//             <PetBrowser />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';
import data from '../db.json';

const App = () => {
  const [filters, setFilters] = useState({ type: 'all' });
  const [pets, setPets] = useState([]);

  const handleChangeType = (typeSelected) => {
    console.log('type:',typeSelected)
    setFilters({ ...filters, typeSelected });
  };

  const handleFindPetsClick = () => {
    const filteredPets = data.pets.filter(pet => {
      if (filters.type === 'all') {
        return true;
      }
      return pet.type === filters.type;
    });
  
    console.log('filteredPets:', filteredPets);
    setPets(filteredPets);
  };
  // const handleAdoptPet = (id) => {
  //   const updatedPets = pets.map(pet => 
  //     pet.id === id ? { ...pet, isAdopted: true } : pet
  //   );
  //   setPets(updatedPets);
  // };
  const handleAdoptPet = (id) => {
    setPets(pets.map(pet =>
      pet.id === id ? { ...pet, isAdopted: true } : pet
    ));
  };
  
  return (
    <div>
      <Filters 
        onChangeType={handleChangeType} 
        onFindPetsClick={handleFindPetsClick} 
      />
      <PetBrowser 
        pets={pets} 
        onAdoptPet={handleAdoptPet} 
      />
    </div>
  );
};

export default App;



