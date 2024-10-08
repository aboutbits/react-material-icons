import React from 'react'
import { IconProps } from './types'

const IconEarthquakeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M331-80 220-440H80v-80h199l75 243 134-603h64l94 407 65-207h57l60 160h52v80H772l-29-77-74 237h-61l-88-379L392-80h-61Z" />
  </svg>
)

export { IconEarthquakeSharp as default }
