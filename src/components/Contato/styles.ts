import { styled } from 'styled-components'

import variaveis from '../../styles/variaveis'
import { FiMoreVertical, FiTrash2 } from 'react-icons/fi'

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

  & p span {
    color: ${variaveis.cores.vermelho};
    margin-right: 0.5em;
  }
`

export const MenuContact = styled.div`
  cursor: pointer;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 0.8em;
  color: #fff;
  padding: 0.8em 1.8em;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.cores.verde};
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.cores.vermelho};
  margin-left: 0.5em;
`
export const BotaoExcluir = styled(FiTrash2)`
  font-size: 1.5em;
`

export const BotaoMenu = styled(FiMoreVertical)`
  font-size: 1.5em;
  margin-left: 0.5em;
`
