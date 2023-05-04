import { useEffect } from 'react'
import { UserView } from '../features/userjs/UserView'
import { Awe, home } from './icons'
import axios from 'axios'

const Home = () => {
  const fetch = () => {
    return axios
      .get('http://localhost:4400/restaurants')
      .then(response => console.log(response.data))
  }
  useEffect(() => {
    fetch()
  }, [])

  return (
    <div>
      <h2>home</h2>
      <Awe icon={home} />
      <UserView />
      {typeof axios}
    </div>
  )
}

export default Home
