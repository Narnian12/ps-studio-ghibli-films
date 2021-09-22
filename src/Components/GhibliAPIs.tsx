import React, { FC, useState } from 'react';
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
import { Home } from './Home';
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
  const [numPages, setNumPages] = useState(0);
  const [currPage, setCurrPage] = useState(1);

  const pageChanged = (event: React.ChangeEvent<unknown>, page: number) => {
    event.preventDefault();
    return setCurrPage(page);
  };

  return (
    <>
      <Router>
        <GhibliAPIsWrapper>
          <LinkStyle to="/ps-studio-ghibli-films">
            <Button variant="contained">
              <Typography>Home</Typography>
            </Button>
          </LinkStyle>
          <LinkStyle to="/ps-studio-ghibli-films/films">
            <Button variant="contained">
              <Typography>Films</Typography>
            </Button>
          </LinkStyle>
          <LinkStyle to="/ps-studio-ghibli-films/people">
            <Button variant="contained">
              <Typography>People</Typography>
            </Button>
          </LinkStyle>
          <LinkStyle to="/ps-studio-ghibli-films/locations">
            <Button variant="contained">
              <Typography>Locations</Typography>
            </Button>
          </LinkStyle>
          <LinkStyle to="/ps-studio-ghibli-films/species">
            <Button variant="contained">
              <Typography>Species</Typography>
            </Button>
          </LinkStyle>
          <LinkStyle to="/ps-studio-ghibli-films/vehicles">
            <Button variant="contained">
              <Typography>Vehicles</Typography>
            </Button>
          </LinkStyle>
        </GhibliAPIsWrapper>
        <GhibliListsWrapper>
          <Switch>
            <Route path="/ps-studio-ghibli-films/films">
              <GhibliFilms
                ghibliFilms={ghibliFilms}
                setGhibliFilms={setGhibliFilms}
                setNumPages={setNumPages}
                currPage={currPage}
              />
            </Route>
            <Route path="/ps-studio-ghibli-films/people">
              <GhibliPeople
                ghibliPeople={ghibliPeople}
                setGhibliPeople={setGhibliPeople}
                setNumPages={setNumPages}
                currPage={currPage}
              />
            </Route>
            <Route path="/ps-studio-ghibli-films/locations">
              <GhibliLocations
                ghibliLocations={ghibliLocations}
                setGhibliLocations={setGhibliLocations}
                setNumPages={setNumPages}
                currPage={currPage}
              />
            </Route>
            <Route path="/ps-studio-ghibli-films/species">
              <GhibliSpeciesList
                ghibliSpecies={ghibliSpecies}
                setGhibliSpecies={setGhibliSpecies}
                setNumPages={setNumPages}
                currPage={currPage}
              />
            </Route>
            <Route path="/ps-studio-ghibli-films/vehicles">
              <GhibliVehicles
                ghibliVehicles={ghibliVehicles}
                setGhibliVehicles={setGhibliVehicles}
                setNumPages={setNumPages}
                currPage={currPage}
              />
            </Route>
            <Route path="/ps-studio-ghibli-films/">
              <Home setNumPages={setNumPages} />
            </Route>
          </Switch>
        </GhibliListsWrapper>
      </Router>
      <Footer>
        <Pagination count={numPages} color="primary" onChange={pageChanged} />
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
