import { useEffect, useReducer } from 'react'

import LogoNormal from '@assets/images/mundi_logo.webp'
import LogoWhite from '@assets/images/mundi_logo_full_white.webp'

import NavMenu from './NavMenu'
import SheetHamb from './SheetHamb'

type NavState = {
  navBarColor: string
  logo: typeof LogoWhite
  logoSize: string
  logoColorHamb: 'white' | 'gray'
}

type NavAction = { type: 'SCROLLED' } | { type: 'TOP' }

const topState: NavState = {
  navBarColor: 'py-6 text-white',
  logo: LogoWhite,
  logoSize: 'w-32',
  logoColorHamb: 'white',
}

const scrolledState: NavState = {
  navBarColor: 'bg-white py-2 lg:py-4 text-cgray shadow-md',
  logo: LogoNormal,
  logoSize: 'w-16 md:w-20',
  logoColorHamb: 'gray',
}

function navReducer(_state: NavState, action: NavAction): NavState {
  if (action.type === 'SCROLLED') return scrolledState
  return topState
}

const NavSection = () => {
  const [state, dispatch] = useReducer(navReducer, topState)

  useEffect(() => {
    const changeColor = () => {
      const scrollPercent = window.scrollY / window.innerHeight
      dispatch({ type: scrollPercent > 0.63 ? 'SCROLLED' : 'TOP' })
    }

    window.addEventListener('scroll', changeColor, { passive: true })

    return () => {
      window.removeEventListener('scroll', changeColor)
    }
  }, [])

  return (
    <nav
      className={`${state.navBarColor} fixed z-30 w-full backdrop-blur-md transition-all duration-500 ease-in-out`}
    >
      <div className="flex flex-row items-center justify-between gap-5 px-10 sm:px-20 lg:gap-10 lg:px-40">
        {/* LOGO NAVBAR */}
        <img
          src={state.logo.src}
          alt="Logo centro mundi"
          loading="lazy"
          className={state.logoSize}
          draggable={false}
        />

        {/* NAV MENU */}
        <div className="hidden w-full items-center justify-center lg:flex">
          <NavMenu />
        </div>

        <div className="hidden lg:block lg:w-36"></div>

        {/* MOBILE HAMBURGER */}
        <div className="lg:hidden">
          <SheetHamb logoColorHamb={state.logoColorHamb} />
        </div>
      </div>
    </nav>
  )
}

export default NavSection
