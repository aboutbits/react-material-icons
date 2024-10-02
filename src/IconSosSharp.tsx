import React from 'react'
import { IconProps } from './types'

export const IconSosSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-280v-400h280v400H340Zm-300 0v-80h160v-80H40v-240h240v80H120v80h160v240H40Zm640 0v-80h160v-80H680v-240h240v80H760v80h160v240H680Zm-260-80h120v-240H420v240Z" />
  </svg>
)
