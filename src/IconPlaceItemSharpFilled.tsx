import React from 'react'
import { IconProps } from './types'

const IconPlaceItemSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-560h240v80H200v400h560v-400H600v-80h240v560H120Zm360-200L320-480l56-56 64 63v-487h80v487l64-63 56 56-160 160Z" />
  </svg>
)

export { IconPlaceItemSharpFilled as default }
