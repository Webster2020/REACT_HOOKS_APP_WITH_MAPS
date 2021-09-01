import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 5px 10px;
  height: 80px;
  line-height: 1;
  border: 3px solid white;
  background-color: rgba(39, 126, 177, 0.959);
  @media (max-width: 576px) {
    height: 60px;
  }
`;

export const Title = styled.h1`
  display: block;
  margin: 20px;
  font-family: 'Big Shoulders Display', cursive;
  font-size: 25px;
  color: white;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  width: 90px;
  font-family: 'Big Shoulders Display', cursive;
  font-size: 25px;
  color: white;
  @media (max-width: 576px) {
    margin: 0 auto;
    width: 120px;
    font-size: 20px;
  }
`;

export const ButtonContent = styled.h2`
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 20px;
  color: white;
`;
