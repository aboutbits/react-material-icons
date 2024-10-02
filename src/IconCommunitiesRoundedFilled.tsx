import React from 'react'
import { IconProps } from './types'

export const IconCommunitiesRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-320q33 0 56.5-23.5T440-400q0-33-23.5-56.5T360-480q-33 0-56.5 23.5T280-400q0 33 23.5 56.5T360-320Zm240 0q33 0 56.5-23.5T680-400q0-33-23.5-56.5T600-480q-33 0-56.5 23.5T520-400q0 33 23.5 56.5T600-320ZM480-520q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm0 440q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)
