import React from 'react'
import { IconProps } from './types.js'

export const IconGastroenterologySharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-240q0-50 35-85t85-35h80q50 0 85-35t35-85q0-17-11.5-28.5T400-600q-33 0-56.5-23.5T320-680v-200h80v200q50 0 85 35t35 85q0 83-58.5 141.5T320-360h-80q-17 0-28.5 11.5T200-320v240h-80Zm240 0h-80v-80q0-50 35-85t85-35h160q83 0 141.5-58.5T760-480v-40q0-83-58.5-141.5T560-720q-33 0-56.5-23.5T480-800v-80h80v80q117 0 198.5 81.5T840-520v40q0 117-81.5 198.5T560-200H400q-17 0-28.5 11.5T360-160v80Zm-160 0v-240q0-17 11.5-28.5T240-360h80q83 0 141.5-58.5T520-560q0-50-35-85t-85-35v-200 200q50 0 85 35t35 85q0 83-58.5 141.5T320-360h-80q-17 0-28.5 11.5T200-320v240Z" />
  </svg>
)
