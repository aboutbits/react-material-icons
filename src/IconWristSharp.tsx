import React from 'react'
import { IconProps } from './types'

export const IconWristSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-84 244-280H40v-80h236l138 137-59-117h485v80H485l45 89-90 87ZM40-600v-80h184l78-80h498v80H337l-81 80H40Zm520 200v-80h360v80H560Zm0-140v-80h320v80H560ZM40-452Z" />
  </svg>
)
