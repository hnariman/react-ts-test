import styled from "styled-components";

export const ContentBox = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 1em;
  gap: 1em;
  overflow-y: scroll;
`;

export const Container = styled.section`
  overflow: hidden;
  display: grid;
  margin: 0;
  padding: 0;
  grid-template-rows: 40px calc(100vh - 80px) 40px;
`;
