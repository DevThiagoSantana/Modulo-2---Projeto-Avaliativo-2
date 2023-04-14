import { useTheme } from 'styled-components'
import svg404 from '../../assets/404.svg'
import {
  NotFoundContainer,
  NotFoundContainerImg,
  NotFoundContainerH2
} from './styles'

function NotFound() {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()
  return (
      <NotFoundContainer>
        <NotFoundContainerImg src={svg404} alt="404" />
        <NotFoundContainerH2>Página não encontrada</NotFoundContainerH2>
      </NotFoundContainer>
  )
}

export default NotFound
