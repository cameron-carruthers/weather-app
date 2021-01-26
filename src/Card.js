import styled from 'styled-components';

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
  background: linear-gradient(114.44deg, #EB0055 0%, #F98820 100%);
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

const Card = () => (
  <Container>
    <Gradient>
      <Temp>34°</Temp>
    </Gradient>
    <DateContainer>
      <Weekday>Monday</Weekday>
      <Date>January 11th, 2021</Date>
    </DateContainer>
  </Container>
);

export default Card;