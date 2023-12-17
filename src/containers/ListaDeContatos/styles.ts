import styled from 'styled-components'

export const ListaDeContatosWrapper = styled.div`
  font-size: 0.8em;
  padding: 0.5em 1.5em;
`
export const SearchResults = styled.p`
  text-align: center;
  margin-bottom: 1em;
`

export const ContactsList = styled.ul`
  list-style: none;
`

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  color: #666;
  margin-top: 1em;
  padding-bottom: 0.8em;
  padding-right: 0.5em;

  & p:first-child {
    color: #000;
  }
`
