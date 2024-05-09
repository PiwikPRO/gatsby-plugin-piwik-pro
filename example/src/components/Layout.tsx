import * as React from 'react'
import { pageStyles, headerStyle, imageStyle } from '../utils/styles'
import profile from '../images/profile.png'
import { Link } from 'gatsby'

type LayoutProps = { children: React.ReactNode; path: string }

export const Layout = ({ children, path }: LayoutProps) => {
  return (
    <main style={pageStyles}>
      <div style={headerStyle}>
        <img src={profile} style={imageStyle} />
        <p>PiwikPRO Gatsby Examples</p>
      </div>

      {children}

      {path !== '/' && <Link to="/">Back to main page</Link>}
    </main>
  )
}
