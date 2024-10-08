import React from 'react'
import { IconProps } from './types'

const IconMangaOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm164-80h476v-439l-120 39-123-40-77 105-123 40v130l-76 105 43 60Z" />
  </svg>
)

export { IconMangaOutlinedFilled as default }
