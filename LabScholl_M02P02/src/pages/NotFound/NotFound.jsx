import { useTheme } from 'styled-components'
import svg404 from '../../assets/404.svg'
import {
  NotFoundContainer,
  NotFoundContainerImg,
  NotFoundContainerH2
} from './styles'

function NotFound() {
  const theme = useTheme()
  return (
      <NotFoundContainer>
        <NotFoundContainerImg src={svg404} alt="404" />
        <NotFoundContainerH2>Página não encontrada</NotFoundContainerH2>
      </NotFoundContainer>
  )
}

export default NotFound
