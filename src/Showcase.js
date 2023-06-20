import mewtwo from "./images/mewtwo.jpg";
import "./Showcase.css";

function Showcase() {
  let favPokemon = "Mewtwo";
  let pokeCharacteristics = { move: "phyco cut", type: "phycic" };

  // let green = "green"
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <h2>
        Mewtwo's type is{" "}
        <span className="one">{pokeCharacteristics.type} </span> and thier move
        is
        <span className="two">{pokeCharacteristics.move}</span>{" "}
      </h2>
      <img src={mewtwo} alt="pic of mewtwo" />
    </div>
  );
}

export default Showcase;
