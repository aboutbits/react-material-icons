import React from 'react'
import { IconProps } from './types.js'

export const IconNestThermostatSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m339-360 108-191v-44H292v41h104l2 3-96 171 37 20Zm235 0q45 0 70.5-34.5T670-480q0-51-26-85.5T574-600q-45 0-70.5 34.5T478-480q0 51 25.5 85.5T574-360Zm0-41q-26 0-39-23.5T522-480q0-24 11-51.5t41-27.5q30 0 41 27.5t11 51.5q0 32-13 55.5T574-401ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)