import React from 'react'
import { IconProps } from './types.js'

export const IconDatasetRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-280h80q17 0 28.5-11.5T440-320v-80q0-17-11.5-28.5T400-440h-80q-17 0-28.5 11.5T280-400v80q0 17 11.5 28.5T320-280Zm240 0h80q17 0 28.5-11.5T680-320v-80q0-17-11.5-28.5T640-440h-80q-17 0-28.5 11.5T520-400v80q0 17 11.5 28.5T560-280ZM320-520h80q17 0 28.5-11.5T440-560v-80q0-17-11.5-28.5T400-680h-80q-17 0-28.5 11.5T280-640v80q0 17 11.5 28.5T320-520Zm240 0h80q17 0 28.5-11.5T680-560v-80q0-17-11.5-28.5T640-680h-80q-17 0-28.5 11.5T520-640v80q0 17 11.5 28.5T560-520ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)