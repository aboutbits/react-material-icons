import React from 'react'
import { IconProps } from './types.js'

export const IconMoreRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-160q-19 0-36-8.5T296-192L116-432q-16-21-16-48t16-48l180-240q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360Zm40-280q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440Zm140 0q17 0 28.5-11.5T580-480q0-17-11.5-28.5T540-520q-17 0-28.5 11.5T500-480q0 17 11.5 28.5T540-440Zm140 0q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Z" />
  </svg>
)