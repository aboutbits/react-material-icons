import React from 'react'
import { IconProps } from './types.js'

export const IconWoman2Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-80v-240H280l122-308q10-24 31-38t47-14q26 0 47 14t31 38l122 308H540v240H420Zm60-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z" />
  </svg>
)
