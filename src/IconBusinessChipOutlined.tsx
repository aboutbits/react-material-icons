import React from 'react'
import { IconProps } from './types'

const IconBusinessChipOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-320h240q17 0 28.5-11.5T640-360v-160q0-17-11.5-28.5T600-560h-40v-40q0-17-11.5-28.5T520-640h-80q-17 0-28.5 11.5T400-600v40h-40q-17 0-28.5 11.5T320-520v160q0 17 11.5 28.5T360-320Zm80-240v-40h80v40h-80ZM320-200q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760h320q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200H320Zm0-80h320q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680H320q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280Zm160-200Z" />
  </svg>
)

export { IconBusinessChipOutlined as default }