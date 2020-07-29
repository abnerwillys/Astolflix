import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border: 2px solid;
  border-radius: 10px;
  display: inline-block;
  height: 197px;
  width: 298px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;
