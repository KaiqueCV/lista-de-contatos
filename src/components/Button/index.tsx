import * as S from './styles'

type ButtonProps = {
  kind: 'primary' | 'second' | 'danger'
  title: string
  disabled?: boolean
  onPress?: () => void
}

const Button = ({ title, kind, disabled = false, onPress }: ButtonProps) => {
  return (
    <S.Button kind={kind} type="button" onClick={onPress} disabled={disabled}>
      {title}
    </S.Button>
  )
}

export default Button
