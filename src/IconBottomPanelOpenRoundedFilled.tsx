import React from 'react'
import { IconProps } from './types.js'

export const IconBottomPanelOpenRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M368-500h224q14 0 19-12t-5-22l-98-98q-12-12-28-12t-28 12l-98 98q-10 10-5 22t19 12ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-280h560v-360H200v360Z" />
  </svg>
)