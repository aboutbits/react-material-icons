import React from 'react'
import { IconProps } from './types'

const IconInsertTextRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-560h-80q-17 0-28.5-11.5T320-600q0-17 11.5-28.5T360-640h240q17 0 28.5 11.5T640-600q0 17-11.5 28.5T600-560h-80v200q0 17-11.5 28.5T480-320q-17 0-28.5-11.5T440-360v-200ZM40-80v-160q0-17 11.5-28.5T80-280h40v-400H80q-17 0-28.5-11.5T40-720v-160q0-17 11.5-28.5T80-920h160q17 0 28.5 11.5T280-880v40h400v-40q0-17 11.5-28.5T720-920h160q17 0 28.5 11.5T920-880v160q0 17-11.5 28.5T880-680h-40v400h40q17 0 28.5 11.5T920-240v160q0 17-11.5 28.5T880-40H720q-17 0-28.5-11.5T680-80v-40H280v40q0 17-11.5 28.5T240-40H80q-17 0-28.5-11.5T40-80Zm240-120h400v-40q0-17 11.5-28.5T720-280h40v-400h-40q-17 0-28.5-11.5T680-720v-40H280v40q0 17-11.5 28.5T240-680h-40v400h40q17 0 28.5 11.5T280-240v40Z" />
  </svg>
)

export { IconInsertTextRoundedFilled as default }
