import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({monster}) {
  const {/*id,*/ name, hp, sprites} = monster
  const [front, setFront] = useState(true)
  return (
    <Card onClick={() => setFront(!front)}>
      <div>
        <div className="image">
          <img src={front? sprites.front : sprites.back}
            alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
