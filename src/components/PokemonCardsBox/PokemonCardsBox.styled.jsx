import { styled } from "@mui/material/styles";

import MuiBox from "@mui/material/Box";

import MyPokemonCard from "../PokemonCard/PokemonCard";

export const Box = styled(MuiBox)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 150px;
  gap: 20px;
`;

export const PokemonCard = styled(MyPokemonCard)``;
