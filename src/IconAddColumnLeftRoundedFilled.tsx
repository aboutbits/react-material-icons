import React from 'react'
import { IconProps } from './types'

export const IconAddColumnLeftRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-360q-17 0-28.5-11.5T160-400v-40h-40q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h40v-40q0-17 11.5-28.5T200-600q17 0 28.5 11.5T240-560v40h40q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440h-40v40q0 17-11.5 28.5T200-360Zm360 240v-720h240q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H560Zm-320 0q-33 0-56.5-23.5T160-200v-44q0-16 12-26.5t28-9.5q83 0 141.5-58T400-480q0-84-58.5-142T200-680q-16 0-28-10t-12-26v-44q0-33 23.5-56.5T240-840h240v720H240Z" />
  </svg>
)
