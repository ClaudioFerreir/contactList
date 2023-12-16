import styled from 'styled-components'

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
  padding: 0.5em 0.5em;
  margin: 0.5em 2em;
  border-radius: 16px;

  input {
    border: none;
    background-color: #ccc;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: transparent;
    border: none;
  }
`

export default FormWrapper
