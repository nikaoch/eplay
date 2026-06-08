import { parseToBrl } from '../../utils'
import Loader from '../Loader'
import Product from '../Product'
import { Container, List, Titulo } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id: string
  isLoading: boolean
}

const ProductList = ({ background, title, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }
    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <Titulo>{title}</Titulo>
        <List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  title={game.name}
                  system={game.details.system}
                  category={game.details.category}
                  infos={getGameTags(game)}
                  description={game.description}
                  image={game.media.thumbnail}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductList
