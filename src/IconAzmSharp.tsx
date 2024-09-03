import React from 'react'
import { IconProps } from './types'

const IconAzmSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-40v-360H40l400-400h360v360L400-40Zm240-353 80-80v-247H473l-80 80h247v247ZM480-233l80-80v-247H313l-80 80h247v247Z" />
  </svg>
)

export { IconAzmSharp as default }
