import React from 'react'
import { IconProps } from './types.js'

export const IconStairsRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M417-373h63q17 0 28.5-11.5T520-413v-93h63q17 0 28.5-11.5T623-546v-94h57q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720h-97q-17 0-28.5 11.5T543-680v93h-63q-17 0-28.5 11.5T440-547v93h-63q-17 0-28.5 11.5T337-414v94h-57q-17 0-28.5 11.5T240-280q0 17 11.5 28.5T280-240h97q17 0 28.5-11.5T417-280v-93ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)
