import { FC } from 'react';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  GhibliFilm,
  GhibliPerson,
  GhibliLocation,
  GhibliSpecies,
  GhibliVehicle,
  GhibliHeaderInterface,
} from '../Interfaces/ghibli-interface';

export const Header: FC<GhibliHeaderInterface> = ({
  ghibliFilms,
  ghibliPeople,
  ghibliLocations,
  ghibliSpecies,
  ghibliVehicles,
  setGhibliPeople,
  setGhibliLocations,
  setGhibliSpecies,
  setGhibliVehicles,
  currentList,
  setCurrentList,
}) => {
  return (
    <HeaderWrapper>
      <TopWrapper>
        <Title>Studio Ghibli Film List</Title>
        <Select id="ghibli-selector" value={currentList} label="List">
          <MenuItem value={'Films'}>Films</MenuItem>
          <MenuItem value={'People'}>People</MenuItem>
          <MenuItem value={'Locations'}>Locations</MenuItem>
          <MenuItem value={'Species'}>Species</MenuItem>
          <MenuItem value={'Vehicles'}>Vehicles</MenuItem>
        </Select>
      </TopWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const TopSection = styled.div`
  margin: 5px 0px;
`;

const Title = styled(TopSection)`
  font-weight: bold;
`;
