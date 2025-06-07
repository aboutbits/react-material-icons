import React from 'react'
import { IconProps } from './types.js'

export const IconWristSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-84 244-280H40v-400h184l78-80h498v80H560v60h320v80H560v60h360v80H560v60h280v80H485l45 89-90 87Z" />
  </svg>
)
