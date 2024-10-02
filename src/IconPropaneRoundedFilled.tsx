import React from 'react'
import { IconProps } from './types'

export const IconPropaneRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-720h160v-40H400v40Zm-40 480v80q0 17-11.5 28.5T320-120q-17 0-28.5-11.5T280-160v-80q-100 0-170-70T40-480q0-100 70-170t170-70h40v-40q0-33 23.5-56.5T400-840h160q33 0 56.5 23.5T640-760v40h40q100 0 170 70t70 170q0 100-70 170t-170 70v80q0 17-11.5 28.5T640-120q-17 0-28.5-11.5T600-160v-80H360Z" />
  </svg>
)
