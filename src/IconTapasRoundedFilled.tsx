import React from 'react'
import { IconProps } from './types'

export const IconTapasRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-40q-17 0-28.5-11.5T240-80v-320h-80q-42 0-71-29t-29-71q0-42 29-71t71-29h80v-40h-80q-42 0-71-29t-29-71q0-42 29-71t71-29h80v-40q0-17 11.5-28.5T280-920q17 0 28.5 11.5T320-880v40h80q42 0 71 29t29 71q0 42-29 71t-71 29h-80v40h80q42 0 71 29t29 71q0 42-29 71t-71 29h-80v320q0 17-11.5 28.5T280-40Zm400-80v-286q-53-14-86.5-56.5T560-560v-320q0-17 11.5-28.5T600-920h240q17 0 28.5 11.5T880-880v320q0 55-33.5 97.5T760-406v286h40q17 0 28.5 11.5T840-80q0 17-11.5 28.5T800-40H640q-17 0-28.5-11.5T600-80q0-17 11.5-28.5T640-120h40Zm-40-600h160v-120H640v120Z" />
  </svg>
)
