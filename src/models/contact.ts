class Contact {
  fullName: string
  email: string
  phone: number
  id: number

  constructor (
    fullName: string,
    email: string,
    phone: number,
    id: number
  ) {
    this.fullName = fullName
    this.email = email
    this.phone = phone
    this.id = id
  }
}

export default Contact
