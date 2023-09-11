import Card from "../card/Card";
import "./Cards.css"

function Cards({ characters,onClose }) {
  return (
    <div className="cards">
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

export default Cards;
