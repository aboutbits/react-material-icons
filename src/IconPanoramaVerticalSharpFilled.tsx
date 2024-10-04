import React from 'react'
import { IconProps } from './types'

const IconPanoramaVerticalSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M139-82q35-75 58-180t23-220q0-115-23-220t-58-180h681q-35 75-57.5 180T740-482q0 115 22.5 220T820-82H139Z" />
  </svg>
)

export { IconPanoramaVerticalSharpFilled as default }
