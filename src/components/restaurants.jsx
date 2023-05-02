// import { Link, useEffect, useState, supabase } from '../imports'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Awe, envelope } from './icons'
import supabase from '../supabaseClient'

function Restaurants() {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () => {
    const { data, error } = await supabase.from('restaurants').select()
    if (error) {
      setError('Error fetching data' + error)
      setItems([])
    }
    if (data) {
      setItems(data)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1 className="bg-yellow-100 text-lg tracking-[0.8em]">Restaurants</h1>
      <Awe icon={envelope} size="2x" />
      {items.map(item => (
        <Link
          className="z-50 block bg-blue-200  hover:bg-indigo-300 p-1"
          to={`/restaurant/${item.id}`}
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
    </>
  )
}

export default Restaurants
