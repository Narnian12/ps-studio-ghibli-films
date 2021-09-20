import { FC, useEffect } from 'react';
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
}) => {
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then((response) => response.json())
      .then((people: [GhibliPerson]) => setGhibliPeople(people));
  }, [setGhibliPeople]);

  return (
    <AnimeListWrapper>
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
        {ghibliPeople?.map((elem: GhibliPerson) => (
          <>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.name}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.gender}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.age}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.eye_color}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.hair_color}</Typography>
              </GridItemStyle>
            </Grid>
          </>
        ))}
      </Grid>
    </AnimeListWrapper>
  );
};

const AnimeListWrapper = styled.div`
  margin: 80px 0px 0px 0px;
`;

const GridItemStyle = styled.div`
  display: flex;
  justify-content: center;
`;
