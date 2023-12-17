import { FiMoreVertical } from 'react-icons/fi'

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
          <div>
            <p>Nome</p>
            <p>Telefone</p>
            <p>Email</p>
          </div>
          <FiMoreVertical />
        </ContactItem>
        <ContactItem>
          <div>
            <p>Nome</p>
            <p>Telefone</p>
            <p>Email</p>
          </div>
          <FiMoreVertical />
        </ContactItem>
        <ContactItem>
          <div>
            <p>Nome</p>
            <p>Telefone</p>
            <p>Email</p>
          </div>
          <FiMoreVertical />
        </ContactItem>
        <ContactItem>
          <div>
            <p>Nome</p>
            <p>Telefone</p>
            <p>Email</p>
          </div>
          <FiMoreVertical />
        </ContactItem>
      </ContactsList>
    </ListaDeContatosWrapper>
  )
}

export default ListaDeContatos
