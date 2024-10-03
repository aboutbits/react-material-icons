import React from 'react'
import { IconProps } from './types.js'

export const IconPanoramaHorizontalSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M81-140v-681q75 35 180 58t220 23q115 0 220-23t180-58v681q-75-35-180-57.5T481-220q-115 0-220 22.5T81-140Z" />
  </svg>
)
