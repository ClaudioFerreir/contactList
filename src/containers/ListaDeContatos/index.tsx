import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { FiMoreVertical } from 'react-icons/fi'

import {
  ContactItem,
  ContactsList,
  ListaDeContatosWrapper,
  SearchResults
} from './styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.fullName.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadosFiltragem = (quantidade: number) => {
    let mensagem = ''

    if (termo !== undefined && termo.length) {
      mensagem = `Esta pesquisa retornou ${quantidade} resultado(s)`
    } else {
      mensagem = ``
    }

    return mensagem
  }

  const contatosFiltrados = filtraContatos()
  const mensagem = exibeResultadosFiltragem(contatosFiltrados.length)

  return (
    <ListaDeContatosWrapper>
      <SearchResults>{mensagem}</SearchResults>
      <ContactsList>
        {contatosFiltrados.map((item) => (
          <ContactItem key={item.id}>
            <div>
              <p>{item.fullName}</p>
              <p>{item.phone}</p>
              <p>{item.email}</p>
            </div>
            <FiMoreVertical />
          </ContactItem>
        ))}
      </ContactsList>
    </ListaDeContatosWrapper>
  )
}

export default ListaDeContatos
