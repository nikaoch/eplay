import { Banner } from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starwars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro magnam sapiente sunt cum consequuntur consequatur expedita error eum reiciendis! Quis rem sed voluptatibus labore excepturi enim mollitia! Distinctio, suscipit!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro magnam sapiente sunt cum consequuntur consequatur expedita error eum reiciendis! Quis rem sed voluptatibus labore excepturi enim mollitia! Distinctio, suscipit!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro magnam sapiente sunt cum consequuntur consequatur expedita error eum reiciendis! Quis rem sed voluptatibus labore excepturi enim mollitia! Distinctio, suscipit!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro magnam sapiente sunt cum consequuntur consequatur expedita error eum reiciendis! Quis rem sed voluptatibus labore excepturi enim mollitia! Distinctio, suscipit!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro magnam sapiente sunt cum consequuntur consequatur expedita error eum reiciendis! Quis rem sed voluptatibus labore excepturi enim mollitia! Distinctio, suscipit!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro magnam sapiente sunt cum consequuntur consequatur expedita error eum reiciendis! Quis rem sed voluptatibus labore excepturi enim mollitia! Distinctio, suscipit!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro magnam sapiente sunt cum consequuntur consequatur expedita error eum reiciendis! Quis rem sed voluptatibus labore excepturi enim mollitia! Distinctio, suscipit!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starwars
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro magnam sapiente sunt cum consequuntur consequatur expedita error eum reiciendis! Quis rem sed voluptatibus labore excepturi enim mollitia! Distinctio, suscipit!',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
