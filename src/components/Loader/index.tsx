import { PacmanLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './style'

const Loader = () => (
  <Container>
    <PacmanLoader color={colors.white}></PacmanLoader>
  </Container>
)

export default Loader
