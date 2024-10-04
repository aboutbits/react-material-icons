import React from 'react'
import { IconProps } from './types.js'

export const IconGrid4x4Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200h-80q-17 0-28.5-11.5T80-240q0-17 11.5-28.5T120-280h80v-160h-80q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h80v-160h-80q-17 0-28.5-11.5T80-720q0-17 11.5-28.5T120-760h80v-80q0-17 11.5-28.5T240-880q17 0 28.5 11.5T280-840v80h160v-80q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v80h160v-80q0-17 11.5-28.5T720-880q17 0 28.5 11.5T760-840v80h80q17 0 28.5 11.5T880-720q0 17-11.5 28.5T840-680h-80v160h80q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-80v160h80q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200h-80v80q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-80H520v80q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120v-80H280v80q0 17-11.5 28.5T240-80q-17 0-28.5-11.5T200-120v-80Zm80-80h160v-160H280v160Zm240 0h160v-160H520v160ZM280-520h160v-160H280v160Zm240 0h160v-160H520v160Z" />
  </svg>
)
