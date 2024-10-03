import React from 'react'
import { IconProps } from './types.js'

export const IconFolderOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-193 274-800h114l80 80h412v527ZM819-28 687-160H80v-640h80l80 80H128L28-820l56-56L876-84l-57 56Z" />
  </svg>
)
