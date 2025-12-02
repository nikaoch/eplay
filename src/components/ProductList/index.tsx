import Game from '../../models/Game'
import Product from '../Product'
import { Container, List, Titulo } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{title}</Titulo>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            system={game.system}
            category={game.category}
            infos={game.infos}
            description={game.description}
            image={game.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
