import { Navigate, Route, Routes } from 'react-router-dom';
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
        <PetsListNav cats={cats} dogs={dogs} />
        <section className="pets-list">
          <Routes>
             <Route path="*" element={<Navigate to="/pets/cats"/>}/>
            <Route path='cats' element={<>{cats.map((cat) => (
              <Pet key={cat.id} kind="cat" pet={cat} />
            ))}</>}/>
            <Route path="dogs" element={<>{dogs.map((dog) => (
              <Pet key={dog.id} kind="dog" pet={dog} />
            ))}</>}/>
          </Routes>
        </section>
    </section>
  );
};

export default PetsList;
