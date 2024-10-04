import React from 'react'
import { IconProps } from './types'

const IconSportsFootballRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M363-121q-47 5-113.5-2.5T148-148q-14-32-23.5-100T120-364l243 243Zm95-16L136-459q17-75 49.5-136.5T261-701q43-43 104.5-74.5T498-823l324 324q-16 74-47 136t-74 105q-45 44-107.5 75.5T458-137Zm-54-211 208-208q11-11 11-28t-11-28q-11-11-28-11t-28 11L348-404q-11 11-11 28t11 28q11 11 28 11t28-11Zm434-246L595-839q48-6 118 2t99 25q18 40 25 103.5t1 114.5Z" />
  </svg>
)

export { IconSportsFootballRoundedFilled as default }
