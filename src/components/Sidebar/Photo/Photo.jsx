import styled from 'styled-components';

import img from '../../../img/IMG_2105.jpg';
export const Photo = () => (
  // eslint-disable-next-line jsx-a11y/img-redundant-alt
  <Image src={`${img}`} alt="my photo" />
);
const Image = styled.img`
  width: 300px;
  margin-bottom: 50px;
`;
