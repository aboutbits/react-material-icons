import React from 'react'
import { IconProps } from './types.js'

export const IconThumbDownSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-320v-176l146-344h494v520L400-40l-74-74 52-206H40Zm560-440H240L120-480v80h360l-54 220 174-174v-406Zm0 406v-406 406Zm80 34v-80h120v-360H680v-80h200v520H680Z" />
  </svg>
)
