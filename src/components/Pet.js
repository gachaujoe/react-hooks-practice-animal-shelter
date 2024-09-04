// import React from "react";

// function Pet() {
//   // return (
//   //   <div className="card" data-testid="pet">
//   //     <div className="content">
//   //       <span className="header">
//   //         {/*'♀' OR '♂' */}
//   //         PET NAME
//   //       </span>
//   //       <div className="meta">
//   //         <span className="date">PET TYPE</span>
//   //       </div>
//   //       <div className="description">
//   //         <p>Age: PET AGE</p>
//   //         <p>Weight: PET WEIGHT</p>
//   //       </div>
//   //     </div>
//   //     <div className="extra content">
//   //       <button className="ui disabled button">Already adopted</button>
//   //       <button className="ui primary button">Adopt pet</button>
//   //     </div>
//   //   </div>
//   // );
//   return (
//     <div>
//       <h3>{pet.name} ({pet.gender === 'male' ? '♂' : '♀'})</h3>
//       <p>Type: {pet.type}</p>
//       <p>Age: {pet.age}</p>
//       <p>Weight: {pet.weight}</p>
//       {pet.isAdopted ? (
//         <button disabled>Already Adopted</button>
//       ) : (
//         <button onClick={() => onAdoptPet(pet.id)}>Adopt</button>
//       )}
//     </div>
//   );
  
// }

// export default Pet;

// return (
//   <div>
//     <h3>{pet.name} ({pet.gender === 'male' ? '♂' : '♀'})</h3>
//     <p>Type: {pet.type}</p>
//     <p>Age: {pet.age}</p>
//     <p>Weight: {pet.weight}</p>
//     {pet.isAdopted ? (
//       <button disabled>Already Adopted</button>
//     ) : (
//       <button onClick={() => onAdoptPet(pet.id)}>Adopt</button>
//     )}
//   </div>
// );

const Pet = ({ pet, onAdoptPet }) => {
  const GENDER_ICON_MALE = "♂";
const GENDER_ICON_FEMALE = "♀";
  
  const { name, type, age, weight, gender, isAdopted } = pet;
  return (
    <div data-testid="pet">
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Age: {age}</p>
      <p>icon: {gender === 'male' ? GENDER_ICON_MALE : GENDER_ICON_FEMALE}</p>

      <p>Weight: {weight}kg</p>
      <button onClick={() => onAdoptPet(pet.id)} disabled={isAdopted}>
        {isAdopted ? 'Already adopted' : 'Adopt pet'}
      </button>
    </div>
  );
};

export default Pet;