import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { HomeInterface } from '../Interfaces/ghibli-interface';

export const Home: FC<HomeInterface> = ({ setNumPages }) => {
  useEffect(() => {
    setNumPages(0);
  }, [setNumPages]);

  return (
    <HomeText>
      Welcome to the Studio Ghibli World! Take a look around :)
    </HomeText>
  );
};

// This centers the text
const HomeText = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -200px;
`;
