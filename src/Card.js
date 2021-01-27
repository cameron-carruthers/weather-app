import styled from 'styled-components';
import { gradients } from './utils';

const Container = styled.div`
  width: 12rem;
  height: 11.25rem;
  box-shadow: 0px 9px 16px rgba(17, 17, 17, 0.08);
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const Gradient = styled.div`
  width: 100%;
  height: 6.875rem;
  position: relative;
  background: linear-gradient(${props => gradients[props.color]});
  border-radius: 5px 5px 0 0;
`

const Temp = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  top: 0.75rem;
  left: 0.75rem;
  position: absolute;
`

const Weekday = styled.p`
  font-size: 1.0625rem;
  font-weight: 700;
  margin: 0;
  line-height: 0.75rem;
`

const Date = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0;
`

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 4.375rem;
  padding: 1rem;
`

const Card = ({ temp, day, date, bg }) => (
  <Container>
    <Gradient color={bg}>
      <Temp>{temp}°</Temp>
    </Gradient>
    <DateContainer>
      <Weekday>{day}</Weekday>
      <Date>{date}</Date>
    </DateContainer>
  </Container>
);

export default Card;