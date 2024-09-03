import React from 'react'
import { IconProps } from './types'

const IconLtePlusMobiledataRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-320H80q-17 0-28.5-11.5T40-360v-240q0-17 11.5-28.5T80-640q17 0 28.5 11.5T120-600v200h80q17 0 28.5 11.5T240-360q0 17-11.5 28.5T200-320Zm120 0q-17 0-28.5-11.5T280-360v-200h-40q-17 0-28.5-11.5T200-600q0-17 11.5-28.5T240-640h160q17 0 28.5 11.5T440-600q0 17-11.5 28.5T400-560h-40v200q0 17-11.5 28.5T320-320Zm320 0H520q-17 0-28.5-11.5T480-360v-240q0-17 11.5-28.5T520-640h120q17 0 28.5 11.5T680-600q0 17-11.5 28.5T640-560h-80v40h80q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440h-80v40h80q17 0 28.5 11.5T680-360q0 17-11.5 28.5T640-320Zm160-120h-40q-17 0-28.5-11.5T720-480q0-17 11.5-28.5T760-520h40v-40q0-17 11.5-28.5T840-600q17 0 28.5 11.5T880-560v40h40q17 0 28.5 11.5T960-480q0 17-11.5 28.5T920-440h-40v40q0 17-11.5 28.5T840-360q-17 0-28.5-11.5T800-400v-40Z" />
  </svg>
)

export { IconLtePlusMobiledataRoundedFilled as default }
