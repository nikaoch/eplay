import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && rpgGames && simulationGames && fightGames && sportGames) {
    return (
      <>
        <ProductList games={rpgGames} title="RPG" background="black" id="rpg" />
        <ProductList
          games={actionGames}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductList
          games={sportGames}
          title="Esportes"
          background="black"
          id="sport"
        />
        <ProductList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
