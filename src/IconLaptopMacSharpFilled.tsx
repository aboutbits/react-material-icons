import React from 'react'
import { IconProps } from './types'

export const IconLaptopMacSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-160v-80h120l-40-40v-560h800v560l-40 40h120v80H0Zm480-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Z" />
  </svg>
)
