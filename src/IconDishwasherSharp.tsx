import React from 'react'
import { IconProps } from './types'

export const IconDishwasherSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-520v320h560v-320H200Zm0-80h560v-160H200v160Zm280 360q-33 0-56.5-23.5T400-320q0-27 15-57.5T480-480q50 72 65 102.5t15 57.5q0 33-23.5 56.5T480-240Zm200-400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720q-17 0-28.5 11.5T640-680q0 17 11.5 28.5T680-640ZM120-120v-720h720v720H120Zm80-480v-160 160Z" />
  </svg>
)
