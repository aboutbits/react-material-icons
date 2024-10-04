import React from 'react'
import { IconProps } from './types.js'

export const IconNewsmodeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm120-160h400q17 0 28.5-11.5T720-320q0-17-11.5-28.5T680-360H280q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm0-160h80q17 0 28.5-11.5T400-480v-160q0-17-11.5-28.5T360-680h-80q-17 0-28.5 11.5T240-640v160q0 17 11.5 28.5T280-440Zm240 0h160q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520H520q-17 0-28.5 11.5T480-480q0 17 11.5 28.5T520-440Zm0-160h160q17 0 28.5-11.5T720-640q0-17-11.5-28.5T680-680H520q-17 0-28.5 11.5T480-640q0 17 11.5 28.5T520-600Z" />
  </svg>
)