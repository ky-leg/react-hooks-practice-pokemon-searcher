import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleSubmit}) {

  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [frontImage, setFrontImage] = useState("")
  const [backImage, setBackImage] = useState("")

  function onSubmit(){
    const newMonster = {
      name: name,
      hp: hp,
      sprites: {
        front: frontImage,
        back: backImage
      }
    }
    handleSubmit(newMonster)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={onSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={e => setName(e.target.value)} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={e => setHp(e.target.value)} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={e => setFrontImage(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={e => setBackImage(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
