import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  z-index: 999;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 30px;

  font-family: Eina, sans-serif;
  font-weight: 600;
  font-size: 32px;
  color: #1d1d1d;
`;

export const Subtitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;

  font-family: Eina, sans-serif;
  font-weight: normal;
  font-size: 22px;
  color: black;
`;
