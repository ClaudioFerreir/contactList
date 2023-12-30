import styled from 'styled-components'

const FormElement = styled.form`
  display: flex;
  flex-direction: column;

  & input[type='number'] {
    -moz-appearance: textfield;
  }
`

export default FormElement
