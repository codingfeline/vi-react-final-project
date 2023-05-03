import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurants } from './restaurantSlice'

const RestaurantView = () => {
  const restaurants = useSelector(state => state.restaurants)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [])

  return (
    <div>
      <h2>List of restaurants</h2>
      {typeof restaurants}
      {/* {restaurants.loading && <div>Loading...</div>}
      {!restaurants.loading && restaurants.error ? (
        <div>Error: {restaurants.error}</div>
      ) : null}
      {!restaurants.loading && restaurants.names.length ? (
        <ul>
          {restaurants.names.map(restaurant => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      ) : null} */}
    </div>
  )
}

export default RestaurantView
