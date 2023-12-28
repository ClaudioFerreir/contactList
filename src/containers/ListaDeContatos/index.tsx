import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import * as S from './styles'
import Contato from '../../components/Contato'

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
    <S.ListaDeContatosWrapper>
      <S.SearchResults>{mensagem}</S.SearchResults>
      <S.ContactsList>
        {contatosFiltrados.map((item) => (
          <Contato
            email={item.email}
            fullName={item.fullName}
            id={item.id}
            key={item.id}
            phone={item.phone}
            friend={item.friend}
          />
        ))}
      </S.ContactsList>
    </S.ListaDeContatosWrapper>
  )
}

export default ListaDeContatos
