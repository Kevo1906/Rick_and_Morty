import Card from "../card/Card";
import style from "./Cards.module.css"

function Cards({ characters,onClose }) {
  return (
    <div className={style.cards}>
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
