import React from 'react'
import { IconProps } from './types.js'

export const IconVideogameAssetRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240q-33 0-56.5-23.5T80-320v-320q0-33 23.5-56.5T160-720h640q33 0 56.5 23.5T880-640v320q0 33-23.5 56.5T800-240H160Zm120-200v40q0 17 11.5 28.5T320-360q17 0 28.5-11.5T360-400v-40h40q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520h-40v-40q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560v40h-40q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440h40Zm300 80q25 0 42.5-17.5T640-420q0-25-17.5-42.5T580-480q-25 0-42.5 17.5T520-420q0 25 17.5 42.5T580-360Zm120-120q25 0 42.5-17.5T760-540q0-25-17.5-42.5T700-600q-25 0-42.5 17.5T640-540q0 25 17.5 42.5T700-480Z" />
  </svg>
)