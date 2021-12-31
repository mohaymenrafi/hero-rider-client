import styled from 'styled-components';

const FormStyled = styled.form`
  display: flex;
  flex-wrap: wrap;
  label {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  input,
  select {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 15px;
  }
  input[type='submit'] {
    background-color: #1f2937;
    color: white;
    font-size: 1.2rem;
  }
  input[type='submit']:hover {
    background-color: #22c55e;
    cursor: pointer;
  }
`;

export default FormStyled;
