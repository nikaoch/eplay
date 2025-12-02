import { Imagem, Precos, Titulo } from './styles'
import BannerImg from '../../assets/images/banner-homem-aranha.png'
import Button from '../Button'
import Tag from '../Tag'

export const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${BannerImg})` }}>
    <div className="container">
      <div>
        <Tag size="big">Destaque do dia</Tag>
        <Titulo>Marvel Spider Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90!
        </Precos>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar essa oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)
