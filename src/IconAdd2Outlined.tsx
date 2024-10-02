import React from 'react'
import { IconProps } from './types'

export const IconAdd2Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
  </svg>
)
