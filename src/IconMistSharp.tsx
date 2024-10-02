import React from 'react'
import { IconProps } from './types'

export const IconMistSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200v-80h480v80H120Zm560 0v-80h160v80H680ZM120-360v-80h160v80H120Zm240 0v-80h480v80H360ZM120-520v-80h520v80H120Zm600 0v-80h120v80H720ZM120-680v-80h280v80H120Zm360 0v-80h360v80H480Z" />
  </svg>
)
