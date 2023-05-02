import React, { useState } from "react";
import PropTypes from "prop-types";

import { Card } from "@base-components";
import PokemonChips from "@components/PokemonChips/PokemonChips";
import PokemonTypes from "@components/PokemonTypes/PokemonTypes";
import { convertAttributesToLabels } from "@utils";

export default function PokemonCard({
  pokemonName,
  information,
  imageUrl,
  attributes,
  types,
}) {
  const [dataType, setDataType] = useState("Basic");

  return dataType === "Basic" ? (
    <Card
      title={pokemonName}
      information={information}
      imageUrl={imageUrl}
      onClick={() => setDataType("Advanced")}
    />
  ) : (
    <Card
      title={pokemonName}
      imageUrl={imageUrl}
      onClick={() => setDataType("Basic")}
    >
      <PokemonTypes types={types} />
      <PokemonChips chipsContent={convertAttributesToLabels(attributes)} />
    </Card>
  );
}

PokemonCard.propTypes = {
  pokemonName: PropTypes.string,
  information: PropTypes.string,
  imageUrl: PropTypes.string,
  attributes: PropTypes.shape({
    attack: PropTypes.number,
    defense: PropTypes.number,
    spAttack: PropTypes.number,
    spDefense: PropTypes.number,
    health: PropTypes.number,
  }),
  types: PropTypes.arrayOf(PropTypes.string),
};

PokemonCard.defaultProps = {
  pokemonName: "Pokemon",
  information: undefined,
  imageUrl: undefined,
  attributes: {},
  types: [],
};
