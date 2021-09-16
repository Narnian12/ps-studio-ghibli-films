import { FC, useState, useEffect } from 'react';
import {
  GhibliFilm,
  GhibliPerson,
  GhibliLocation,
  GhibliSpecies,
  GhibliVehicle,
} from '../Interfaces/ghibli-interface';
import { Header } from './Header';
import { GhibliList } from './GhibliList';

export const GhibliAPIs: FC = () => {
  // Give the option of undefined so we don't need to populate an empty AnimeListInterface
  const [ghibliFilms, setGhibliFilms] = useState<GhibliFilm[]>([]);
  const [ghibliPeople, setGhibliPeople] = useState<GhibliPerson[]>([]);
  const [ghibliLocations, setGhibliLocations] = useState<GhibliLocation[]>([]);
  const [ghibliSpecies, setGhibliSpecies] = useState<GhibliSpecies[]>([]);
  const [ghibliVehicles, setGhibliVehicles] = useState<GhibliVehicle[]>([]);
  const [currentList, setCurrentList] = useState('Films');

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => response.json())
      .then((films: [GhibliFilm]) => setGhibliFilms(films));
  }, []);

  return (
    <>
      <Header
        ghibliFilms={ghibliFilms}
        ghibliPeople={ghibliPeople}
        ghibliLocations={ghibliLocations}
        ghibliSpecies={ghibliSpecies}
        ghibliVehicles={ghibliVehicles}
        setGhibliPeople={setGhibliPeople}
        setGhibliLocations={setGhibliLocations}
        setGhibliSpecies={setGhibliSpecies}
        setGhibliVehicles={setGhibliVehicles}
        currentList={currentList}
        setCurrentList={setCurrentList}
      />
      <GhibliList
        ghibliFilms={ghibliFilms}
        ghibliPeople={ghibliPeople}
        ghibliLocations={ghibliLocations}
        ghibliSpecies={ghibliSpecies}
        ghibliVehicles={ghibliVehicles}
        currentList={currentList}
      />
    </>
  );
};
