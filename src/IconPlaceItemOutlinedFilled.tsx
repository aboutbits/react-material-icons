import React from 'react'
import { IconProps } from './types.js'

export const IconPlaceItemOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-400q0-33 23.5-56.5T200-680h160v80H200v400h560v-400H600v-80h160q33 0 56.5 23.5T840-600v400q0 33-23.5 56.5T760-120H200Zm280-200L320-480l56-56 64 63v-487h80v487l64-63 56 56-160 160Z" />
  </svg>
)