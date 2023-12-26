import styled from 'styled-components'

export const FiltroWrapper = styled.div`
  display: grid;
  gap: 0.3em;
  grid-auto-flow: column;
  grid-template-columns: 70% auto;
  margin-top: 2em;
  overflow-x: hidden;
  padding: 0 1em;
`

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ccc;
  padding: 0.5em 0em;
  border-radius: 16px;

  input {
    border: none;
    background-color: #ccc;
    padding-left: 0.8em;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: transparent;
    border: none;
  }
`
export const BFTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 0.2em 0.5em;
  background-color: #ffff00;
  border-radius: 12px;
  color: #000;
  font-size: 0.7em;
  text-align: center;
`

export default FormWrapper
