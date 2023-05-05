import { useEffect } from 'react'
import { Awe, home } from './icons'
import RestaurantView from '../features/restaurants/restaurantView'

const Home = () => {
  useEffect(() => {}, [])

  return (
    <div className="bg-lime-100 py-4 ">
      <h2>home</h2>
      <Awe icon={home} />
      <RestaurantView />
    </div>
  )
}

export default Home
