import styled from 'styled-components';

export default styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: lightgray;
  border: none;
  border-radius: 3px;

  @media (max-width: 450px){
      width: 90%;
  }
  
  @media (min-width: 450px){
    margin-left: 10%;
    width: 75%;
  }
`;