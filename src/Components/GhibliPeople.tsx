import React, { FC, useEffect, useState } from 'react';
import {
  GhibliPerson,
  GhibliPeopleInterface,
} from '../Interfaces/ghibli-interface';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const GhibliPeople: FC<GhibliPeopleInterface> = ({
  ghibliPeople,
  setGhibliPeople,
  setNumPages,
  currPage,
}) => {
  const [displayedPeople, setDisplayedPeople] = useState<GhibliPerson[]>([]);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then((response) => response.json())
      .then((people: [GhibliPerson]) => {
        setGhibliPeople(people);
        setDisplayedPeople(
          people.length / 5 >= 1 ? people.slice(0, 5) : people
        );
      });
  }, [setGhibliPeople]);

  useEffect(() => {
    setNumPages(Math.ceil(ghibliPeople.length / 5));
  }, [setNumPages, ghibliPeople]);

  useEffect(() => {
    setDisplayedPeople(ghibliPeople.slice(currPage * 5 - 5, currPage * 5));
  }, [currPage, ghibliPeople]);

  return (
    <ListWrapper>
      <Grid columns={5} container spacing={1}>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Name</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Gender</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Age</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Eye Color</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Hair Color</Typography>
          </GridItemStyle>
        </Grid>
        {displayedPeople?.map((elem: GhibliPerson) => (
          <React.Fragment key={elem.id}>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.name}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.gender}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.age}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.eye_color}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.hair_color}</Typography>
              </GridItemStyle>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  margin: 80px 0px 0px 0px;
`;

const GridItemStyle = styled.div`
  display: flex;
  justify-content: center;
`;
