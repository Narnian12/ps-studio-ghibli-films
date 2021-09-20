import { FC, useState } from 'react';
import {
  GhibliFilm,
  GhibliPerson,
  GhibliLocation,
  GhibliSpecies,
  GhibliVehicle,
} from '../Interfaces/ghibli-interface';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { GhibliFilms } from './GhibliFilms';
import { GhibliPeople } from './GhibliPeople';
import { GhibliLocations } from './GhibliLocations';
import { GhibliSpeciesList } from './GhibliSpeciesList';
import { GhibliVehicles } from './GhibliVehicles';

export const GhibliAPIs: FC = () => {
  // Give the option of undefined so we don't need to populate an empty AnimeListInterface
  const [ghibliFilms, setGhibliFilms] = useState<GhibliFilm[]>([]);
  const [ghibliPeople, setGhibliPeople] = useState<GhibliPerson[]>([]);
  const [ghibliLocations, setGhibliLocations] = useState<GhibliLocation[]>([]);
  const [ghibliSpecies, setGhibliSpecies] = useState<GhibliSpecies[]>([]);
  const [ghibliVehicles, setGhibliVehicles] = useState<GhibliVehicle[]>([]);

  return (
    <>
      <Router>
        <GhibliAPIsWrapper>
          <LinkStyle to="/">
            <Button variant="contained">
              <Typography>Home</Typography>
            </Button>
          </LinkStyle>
          <LinkStyle to="/films">
            <Button variant="contained">
              <Typography>Films</Typography>
            </Button>
          </LinkStyle>
          <LinkStyle to="/people">
            <Button variant="contained">
              <Typography>People</Typography>
            </Button>
          </LinkStyle>
          <LinkStyle to="/locations">
            <Button variant="contained">
              <Typography>Locations</Typography>
            </Button>
          </LinkStyle>
          <LinkStyle to="/species">
            <Button variant="contained">
              <Typography>Species</Typography>
            </Button>
          </LinkStyle>
          <LinkStyle to="/vehicles">
            <Button variant="contained">
              <Typography>Vehicles</Typography>
            </Button>
          </LinkStyle>
        </GhibliAPIsWrapper>
        <GhibliListsWrapper>
          <Switch>
            <Route path="/films">
              <GhibliFilms
                ghibliFilms={ghibliFilms}
                setGhibliFilms={setGhibliFilms}
              />
            </Route>
            <Route path="/people">
              <GhibliPeople
                ghibliPeople={ghibliPeople}
                setGhibliPeople={setGhibliPeople}
              />
            </Route>
            <Route path="/locations">
              <GhibliLocations
                ghibliLocations={ghibliLocations}
                setGhibliLocations={setGhibliLocations}
              />
            </Route>
            <Route path="/species">
              <GhibliSpeciesList
                ghibliSpecies={ghibliSpecies}
                setGhibliSpecies={setGhibliSpecies}
              />
            </Route>
            <Route path="/vehicles">
              <GhibliVehicles
                ghibliVehicles={ghibliVehicles}
                setGhibliVehicles={setGhibliVehicles}
              />
            </Route>
          </Switch>
        </GhibliListsWrapper>
      </Router>
      <Footer>
        <Pagination count={10} color="primary" />
      </Footer>
    </>
  );
};

const GhibliAPIsWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  margin: 40px 0px 0px 0px;
  display: flex;
  justify-content: space-around;
  background-color: lightgray;
  padding: 5px;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
`;

const GhibliListsWrapper = styled.div`
  margin: 0px 0px 40px 0px;
`;

const Footer = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: lightgray;
  padding: 5px;
`;
