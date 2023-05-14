// import { Link, useEffect, useState, supabase } from '../imports'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Awe, envelope } from './icons'
import supabase from '../supabaseClient'
import { useSelector } from 'react-redux'

export default function Restaurants() {
  const auth = useSelector(state => state.auth.value)
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState(true)

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

  const toggle = async (id, status) => {
    // alert(typeof id)
    try {
      const { data } = await supabase
        .from('restaurants')
        .update({ is_open: !status })
        .eq('id', id)
        .throwOnError()
        .select()
        .order('name', { ascending: false })

      if (data) setItems(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [items])

  return (
    <>
      {/* {auth ? 'auth' : 'no-auth'} */}
      <h1 className="bg-yellow-100 text-lg tracking-[0.8em]">Restaurants</h1>
      <Awe icon={envelope} size="2x" />
      {/* {JSON.stringify(items)} */}
      {items.map(item => {
        return (
          <div className="flex justify-between items-center gap-2 w-3/5">
            <Link
              className="z-50 block bg-blue-200  hover:bg-indigo-300 p-1"
              to={`/restaurant/one/${item.id}`}
              key={item.id}
            >
              {item.name}
            </Link>
            {auth && (
              <input
                type="checkbox"
                onChange={() => toggle(item.id, item.is_open)}
                checked={item.is_open ? true : false}
              />
            )}
          </div>
        )
      })}
    </>
  )
}
