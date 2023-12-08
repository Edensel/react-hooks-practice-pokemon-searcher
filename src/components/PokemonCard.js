import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [showBack, setShowBack] = useState(false);

  const toggleCard = () => {
    setShowBack(!showBack);
  };

  // Ensure pokemon object exists and has the sprites property before rendering
  if (!pokemon || !pokemon.sprites) {
    return null; // or display a placeholder
  }

  // Ensure pokemon object has the hp property before accessing it
  const hp = pokemon.hp || "N/A";

  return (
    <Card onClick={toggleCard}>
      <div>
        <div className="image">
          <img
            src={showBack ? pokemon.sprites.back : pokemon.sprites.front}
            alt={pokemon.name}
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            HP: {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
