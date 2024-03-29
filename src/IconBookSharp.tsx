import React from 'react'
import { IconProps } from './types'

const IconBookSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z" />
  </svg>
)

export { IconBookSharp as default }
