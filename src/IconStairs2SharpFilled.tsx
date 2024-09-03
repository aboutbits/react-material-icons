import React from 'react'
import { IconProps } from './types'

const IconStairs2SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-200v-80h240v-240h240v-240h320v80H640v240H400v240H80Z" />
  </svg>
)

export { IconStairs2SharpFilled as default }
