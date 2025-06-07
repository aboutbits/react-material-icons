import React from 'react'
import { IconProps } from './types.js'

export const IconMan2Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-80v-280H320v-240q0-33 23.5-56.5T400-680h160q33 0 56.5 23.5T640-600v240H540v280H420Zm60-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z" />
  </svg>
)
