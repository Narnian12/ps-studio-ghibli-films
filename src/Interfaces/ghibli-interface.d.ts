import { Dispatch, SetStateAction } from 'react';

export interface GhibliFilm {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: Array<string>;
  species: Array<string>;
  locations: Array<string>;
  vehicles: Array<string>;
  url: string;
}

export interface GhibliPerson {
  id: string;
  name: string;
  gender: string;
  age: string;
  eye_color: string;
  hair_color: string;
  films: Array<string>;
  species: string;
  url: string;
}

export interface GhibliLocation {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: Array<string>;
  films: Array<string>;
  url: string;
}

export interface GhibliSpecies {
  id: string;
  name: string;
  classification: string;
  eye_colors: string;
  hair_colors: string;
  people: Array<string>;
  films: Array<string>;
  url: string;
}

export interface GhibliVehicle {
  id: string;
  name: string;
  description: string;
  vehicle_class: string;
  length: string;
  pilot: string;
  films: Array<string>;
  url: string;
}

export interface GhibliHeaderInterface {
  ghibliFilms: GhibliFilm[];
  ghibliPeople: GhibliPerson[];
  ghibliLocations: GhibliLocation[];
  ghibliSpecies: GhibliSpecies[];
  ghibliVehicles: GhibliVehicle[];
  setGhibliPeople: Dispatch<SetStateAction<GhibliPerson[]>>;
  setGhibliLocations: Dispatch<SetStateAction<GhibliLocation[]>>;
  setGhibliSpecies: Dispatch<SetStateAction<GhibliSpecies[]>>;
  setGhibliVehicles: Dispatch<SetStateAction<GhibliVehicle[]>>;
  currentList: string;
  setCurrentList: Dispatch<SetStateAction<string>>;
}

export interface GhibliListInterface {
  ghibliFilms: GhibliFilm[];
  ghibliPeople: GhibliPerson[];
  ghibliLocations: GhibliLocation[];
  ghibliSpecies: GhibliSpecies[];
  ghibliVehicles: GhibliVehicle[];
  currentList: string;
}
