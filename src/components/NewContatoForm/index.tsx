import FormElement from './styles'

const NewContatoForm = () => (
  <FormElement>
    <input type="text" placeholder="Nome completo" />
    <input type="email" placeholder="Email" />
    <input type="number" placeholder="Telefone" />
    <div>
      <input type="checkbox" id="friend" />
      <label htmlFor="friend">Amigo</label>
    </div>
    <button type="submit">Cadastrar</button>
  </FormElement>
)

export default NewContatoForm
