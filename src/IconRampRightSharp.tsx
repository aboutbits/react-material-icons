import React from 'react'
import { IconProps } from './types'

const IconRampRightSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v-252q-33 45-79 85.5T258-211l-58-58q30-17 71-47t78.5-71.5q37.5-41.5 64-95T440-600v-87l-64 63-56-56 160-160 160 160-56 56-64-63v567h-80Z" />
  </svg>
)

export { IconRampRightSharp as default }
