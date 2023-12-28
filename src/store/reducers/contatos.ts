import { createSlice } from '@reduxjs/toolkit'
import Contact from '../../models/contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      fullName: 'João Silva',
      email: 'joaosilva@email.com',
      phone: 11999999999,
      friend: true
    },
    {
      id: 2,
      fullName: 'Maria Joaquina',
      email: 'mariajoaquina@email.com',
      phone: 11999999999,
      friend: false
    },
    {
      id: 3,
      fullName: 'Josefina Silva',
      email: 'josefinasilva@email.com',
      phone: 11999999999,
      friend: false
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {}
})

export default contactsSlice.reducer
