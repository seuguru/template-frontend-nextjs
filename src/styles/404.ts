import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(135deg, #C5E205 50%, #FFFFFF 50%);
  
  font-family: Eina;
  font-weight: 600;
  font-size: 19px;

  .box {
    padding: 0 1em 1em;

    display: flex;
    flex-direction: column;
    
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 0 5px rgb(0 0 0 / 2%);
    border-radius: 10px;
  }

  .text {
    margin-bottom: 1em;
    font-family: Eina;
  }

  .title {
    margin: 0;
    font-size: 6rem;
    line-height: 9rem;
  }

  .link {
    padding-bottom: 0.3em;

    display: flex;
    align-items: center;
    align-self: flex-end;
    gap: 0.5em;
    
    background: none;
    border: none;
    border-bottom: 2px solid #C5E205;
    
    cursor: pointer;
    
    font-family: Eina;
    font-size: 1em;
    text-decoration: none;
    color: black;

    &:active {
      opacity: 0.6;
    }
  }
`;