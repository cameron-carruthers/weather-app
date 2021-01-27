import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import styled from 'styled-components';
import { primaryColor } from './utils';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Loading = () => (
  <Container>
    <Loader
         type="Circles"
         color={primaryColor}
         height={150}
         width={150}
      />
  </Container>
);

export default Loading;