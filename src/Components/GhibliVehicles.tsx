import React, { FC, useEffect } from 'react';
import {
  GhibliVehicle,
  GhibliVehiclesInterface,
} from '../Interfaces/ghibli-interface';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const GhibliVehicles: FC<GhibliVehiclesInterface> = ({
  ghibliVehicles,
  setGhibliVehicles,
  setNumPages,
}) => {
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/vehicles')
      .then((response) => response.json())
      .then((vehicles: [GhibliVehicle]) => {
        setGhibliVehicles(vehicles);
        setNumPages(1);
      });
  }, [setGhibliVehicles, setNumPages]);

  return (
    <ListWrapper>
      <Grid columns={5} container spacing={1}>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Name</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={2}>
          <GridItemStyle>
            <Typography variant="h6">Description</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Class</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Length</Typography>
          </GridItemStyle>
        </Grid>
        {ghibliVehicles?.map((elem: GhibliVehicle) => (
          <React.Fragment key={elem.id}>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.name}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={2}>
              <GridItemStyle>
                <Typography>{elem.description}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.vehicle_class}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.length}</Typography>
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
