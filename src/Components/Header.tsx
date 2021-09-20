import { FC } from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Typography variant="h4">Studio Ghibli World</Typography>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: lightgray;
`;
