import React from 'react'
import { IconProps } from './types'

const IconRoomServiceSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-200v-80h800v80H80Zm40-120v-40q0-128 78.5-226T400-710v-90h160v90q124 26 202 124t78 226v40H120Zm82-80h556q-14-104-93-172t-185-68q-106 0-184.5 68T202-400Zm278 0Z" />
  </svg>
)

export { IconRoomServiceSharp as default }
