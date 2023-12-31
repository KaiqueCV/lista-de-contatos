import * as S from './styles'

type ContactBarProps = {
  name: string
  email: string
  telefone: string
}

const ContactBar = ({ name, email, telefone }: ContactBarProps) => (
  <S.ContainerBar>
    <S.Text>{name}</S.Text>
    <S.Text>{email}</S.Text>
    <S.Text>{telefone}</S.Text>
  </S.ContainerBar>
)

export default ContactBar
