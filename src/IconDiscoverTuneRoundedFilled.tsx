import React from 'react'
import { IconProps } from './types.js'

export const IconDiscoverTuneRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-600q-17 0-28.5-11.5T520-640q0-17 11.5-28.5T560-680h80v-120q0-17 11.5-28.5T680-840q17 0 28.5 11.5T720-800v120h80q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H560Zm120 480q-17 0-28.5-11.5T640-160v-320q0-17 11.5-28.5T680-520q17 0 28.5 11.5T720-480v320q0 17-11.5 28.5T680-120Zm-400 0q-17 0-28.5-11.5T240-160v-120h-80q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280h-80v120q0 17-11.5 28.5T280-120Zm0-320q-17 0-28.5-11.5T240-480v-320q0-17 11.5-28.5T280-840q17 0 28.5 11.5T320-800v320q0 17-11.5 28.5T280-440Z" />
  </svg>
)
