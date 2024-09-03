import React from 'react'
import { IconProps } from './types'

const IconPlaylistAddCircleRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-360v40q0 17 11.5 28.5T640-280q17 0 28.5-11.5T680-320v-40h40q17 0 28.5-11.5T760-400q0-17-11.5-28.5T720-440h-40v-40q0-17-11.5-28.5T640-520q-17 0-28.5 11.5T600-480v40h-40q-17 0-28.5 11.5T520-400q0 17 11.5 28.5T560-360h40Zm-280 0h40q17 0 28.5-11.5T400-400q0-17-11.5-28.5T360-440h-40q-17 0-28.5 11.5T280-400q0 17 11.5 28.5T320-360Zm0-120h200q17 0 28.5-11.5T560-520q0-17-11.5-28.5T520-560H320q-17 0-28.5 11.5T280-520q0 17 11.5 28.5T320-480Zm0-120h200q17 0 28.5-11.5T560-640q0-17-11.5-28.5T520-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
  </svg>
)

export { IconPlaylistAddCircleRoundedFilled as default }
