import styled from 'styled-components';

// import img from '../../../img/IMG_2105.jpg';
import img from '../../../img/square_banana.JPG';

export const Photo = () => (
  // eslint-disable-next-line jsx-a11y/img-redundant-alt
  <Image src={`${img}`} alt="my photo" />
);
const Image = styled.img`
  width: 100%;
  /* height: 100%; */
  /* margin-bottom: 50px; */
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }

  @media screen and (min-width: 1280px) {
    width: 300px;
  }
`;
