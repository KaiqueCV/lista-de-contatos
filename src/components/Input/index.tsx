import * as S from './style'

type InputTextProps = {
  label?: string
  placeholder?: string
  value?: string
  onChangeText: (args: string) => void
}

const InputText = ({
  label,
  placeholder,
  value = '',
  onChangeText
}: InputTextProps) => {
  return (
    <S.ContainerInput>
      <S.Label>{label}</S.Label>
      <S.Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </S.ContainerInput>
  )
}

export default InputText
