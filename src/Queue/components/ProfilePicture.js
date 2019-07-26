import styled from 'styled-components';

export default styled.div`
  background-color: grey;
  border-top-left-radius: 0.2em;
  border-top-right-radius: 0.2em;

  @media (max-width: 450px){
    height: 290px;
    width: 290px;
    background-image: ${props => `url(https://www.gravatar.com/avatar/${props.imageHash}?s=300)`};
  }
  
  @media (min-width: 450px){
    height: 170px;
    width: 170px;
    background-image: ${props => `url(https://www.gravatar.com/avatar/${props.imageHash}?s=200)`};
  }
`;
