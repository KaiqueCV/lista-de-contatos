import { NavLink } from 'react-router-dom'
import { IconType } from 'react-icons'
import { S } from './styles'

type PropsType = {
  title: string
  route: string
  Icon: IconType
}

const GuideBar = ({ title, route, Icon }: PropsType) => {
  return (
    <S.Bar>
      <S.BoxIcon>
        <Icon />
      </S.BoxIcon>
      <S.BoxTitle>
        <S.Title>
          <NavLink to={route}>{title}</NavLink>
        </S.Title>
      </S.BoxTitle>
    </S.Bar>
  )
}

export default GuideBar
