import styled from 'styled-components';

export default styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 0.2em;
  margin: 20px auto;
  display: flex;

  @media (max-width: 450px){
    width: 290px;
    height: 370px;
    flex-direction: column;
  }
  
  @media (min-width: 450px){
    width: 80%;
    height: 170px;
    flex-direction: row;
  }
`;
