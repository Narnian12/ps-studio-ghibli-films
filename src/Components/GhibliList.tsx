import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  GhibliFilm,
  GhibliListInterface,
} from '../Interfaces/ghibli-interface';

export const GhibliList: FC<GhibliListInterface> = ({
  ghibliFilms,
  ghibliPeople,
  ghibliLocations,
  ghibliSpecies,
  ghibliVehicles,
  currentList,
}) => {
  return (
    <AnimeListWrapper>
      {ghibliFilms?.map((elem: GhibliFilm) => (
        <div key={elem.id}>{elem.title}</div>
      ))}
    </AnimeListWrapper>
  );
};

const AnimeListWrapper = styled.div`
  margin: 90px 0px 0px 0px;
`;
