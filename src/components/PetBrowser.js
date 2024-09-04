// import React from "react";

// import Pet from "./Pet";

// function PetBrowser() {
//   return <div className="ui cards">PET COMPONENT SHOULD GO HERE</div>;
// }
// return (
//   <div>
//     {pets.map(pet => (
//       <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
//     ))}
//   </div>
// );


// export default PetBrowser;

// import React from 'react';
// import Pet from './Pet';

// function PetBrowser({ pets, onAdoptPet }) {
//   return (
//     <div>
//       {pets.map(pet => (
//         <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
//       ))}
//     </div>
//   );
// }

// export default PetBrowser;

import React from 'react';
import Pet from './Pet'; // Make sure to import Pet


const PetBrowser = ({ pets, onAdoptPet }) => {
  return (
    <div>
      {pets.map(pet => (
        <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
      ))}
    </div>
  );
};

export default PetBrowser;