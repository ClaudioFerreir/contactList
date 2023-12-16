import {
  ContactItem,
  ContactsList,
  ListaDeContatosWrapper,
  SearchResults
} from './styles'

const ListaDeContatos = () => {
  return (
    <ListaDeContatosWrapper>
      <SearchResults>Esta pesquisa retornou 0 resultados</SearchResults>
      <ContactsList>
        <ContactItem>
          <p>Nome</p>
          <p>Telefone</p>
          <p>Email</p>
        </ContactItem>
        <ContactItem>
          <p>Nome</p>
          <p>Telefone</p>
          <p>Email</p>
        </ContactItem>
        <ContactItem>
          <p>Nome</p>
          <p>Telefone</p>
          <p>Email</p>
        </ContactItem>
        <ContactItem>
          <p>Nome</p>
          <p>Telefone</p>
          <p>Email</p>
        </ContactItem>
      </ContactsList>
    </ListaDeContatosWrapper>
  )
}

export default ListaDeContatos
