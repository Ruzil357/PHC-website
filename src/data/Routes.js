import React from 'react'

export const navbarRoutes = [
  {
    name: <b>Investing Society</b>,
    route: '/',
  },
  {
    name: 'Join',
    route: '/join',
  },
  {
    name: 'Events',
    route: '/events',
  },
  {
    name: 'Alumni',
    route: '/alumni',
  },
  {
    name: 'About',
    route: '/about',
  },
]

const baseRoute =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1337'
    : 'https://investing-society.vondrr.live'

export const ApiRoutes = {
  join: `${baseRoute}/join`,
}
