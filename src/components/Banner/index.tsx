import { Image, Prices, Title } from './styles'
import Button from '../Button'
import Tag from '../Tag'
import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

export const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag size="big">Destaque do dia</Tag>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}
