import React from 'react'
import { IconProps } from './types'

export const IconFlashOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-880h400l-80 280h160L643-431 280-794v-86ZM400-80v-320H280v-166L55-791l57-57 736 736-57 57-241-241L400-80Z" />
  </svg>
)
