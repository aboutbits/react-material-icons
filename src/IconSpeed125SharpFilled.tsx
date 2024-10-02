import React from 'react'
import { IconProps } from './types'

export const IconSpeed125SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-280v-80h80v80h-80Zm400 0v-80h160v-80H660v-240h240v80H740v80h160v240H660Zm-280 0v-240h160v-80H380v-80h240v240H460v80h160v80H380Zm-240 0v-320H60v-80h160v400h-80Z" />
  </svg>
)
