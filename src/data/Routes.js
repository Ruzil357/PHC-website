import React from 'react'

export const navbarRoutes = [
  {
    name: <b>Investing Society</b>,
    route: '/',
  },
  {
    name: 'About',
    route: '/about',
  },
  {
    name: 'Join',
    route: '/join',
  },
]

const baseRoute =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1337'
    : 'http://20.198.76.108'

export const ApiRoutes = {
  join: `${baseRoute}/join`,
}
