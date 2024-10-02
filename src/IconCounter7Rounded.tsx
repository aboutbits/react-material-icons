import React from 'react'
import { IconProps } from './types'

export const IconCounter7Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m520-600-68 272q-5 18 7 33t31 15q14 0 24-8t13-21l71-281q2-5 2-9v-9q0-29-20.5-50.5T530-680H400q-17 0-28.5 11.5T360-640q0 17 11.5 28.5T400-600h120ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
  </svg>
)
