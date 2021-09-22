import React, { FC, useEffect } from 'react';
import {
  GhibliSpecies,
  GhibliSpeciesInterface,
} from '../Interfaces/ghibli-interface';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const GhibliSpeciesList: FC<GhibliSpeciesInterface> = ({
  ghibliSpecies,
  setGhibliSpecies,
  setNumPages,
}) => {
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/species')
      .then((response) => response.json())
      .then((species: [GhibliSpecies]) => {
        setGhibliSpecies(species);
        setNumPages(1);
      });
  }, [setGhibliSpecies, setNumPages]);

  return (
    <ListWrapper>
      <Grid columns={4} container spacing={1}>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Name</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Classification</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Eye Colors</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Hair Colors</Typography>
          </GridItemStyle>
        </Grid>
        {ghibliSpecies?.map((elem: GhibliSpecies) => (
          <React.Fragment key={elem.id}>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.name}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.classification}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.eye_colors}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.hair_colors}</Typography>
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
