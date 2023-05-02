import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Awe, bars, xmark } from '../icons'
import { newName } from '../../features/path/pathSlice'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const location = useLocation()
  const path = useSelector(state => state.path.value)
  const dispatch = useDispatch()
  const links = [
    { item: 'Home', to: '/' },
    { item: 'Compo', to: '/compo' },
    { item: 'Restaurants', to: '/restaurants' },
  ]

  const [hidden, setHidden] = useState(true)
  const toggle = () => {
    setHidden(!hidden)
  }
  const collapse = item => {
    setHidden(true)
    // dispatch(newName(item))
  }
  const handleScroll = () => collapse()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
  }, [])
  return (
    <>
      {/* {path} */}
      <div className="flex justify-center sm:justify-end">
        {hidden ? (
          <a
            href="#"
            className="cursor-pointer text-slate-700 block w-full hover:bg-slate-300 sm:flex sm:justify-center "
          >
            <Awe
              icon={bars}
              size="3x"
              onClick={toggle}
              className="w-full sm:hidden"
            />{' '}
          </a>
        ) : (
          <a
            href="#"
            className="cursor-pointer hover:text-slate-100 block w-full hover:bg-blue-100"
          >
            <Awe
              icon={xmark}
              size="3x"
              onClick={toggle}
              className="w-full z-200 absolute hover:text-blue-600 text-blue-400"
            />
          </a>
        )}
      </div>
      <div
        className={`duration-300 sm:static absolute bg-blue-100 sm:min-h-fit min-h-[100vh] left-0  sm:w-auto  w-full flex items-center justify-center sm:justify-end z-100 
      ${!hidden ? 'top-[0%]' : 'top-[-100%]'}
      `}
        onClick={collapse}
      >
        <ul className="flex flex-col justify-center items-center sm:flex-row sm:justify-around  bg-indigo-200 w-full h-full">
          {links.map(link => (
            <li key={link.item} className="nav-li">
              <Link onClick={collapse} to={link.to} className="nav-a">
                {link.item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Header
