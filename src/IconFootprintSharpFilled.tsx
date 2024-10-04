import React from 'react'
import { IconProps } from './types.js'

export const IconFootprintSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-920q85 0 132.5 75.5T440-680q0 41-8.5 78T412-536l-285 57q-15-29-31-80.5T80-680q0-103 51-171.5T260-920Zm55 680q-71 0-110.5-49.5T160-404l258-52q8 17 15 38.5t7 44.5q0 57-35.5 95T315-240Zm385-480q78 0 129 68.5T880-480q0 69-16 120.5T833-279l-285-57q-11-29-19.5-66t-8.5-78q0-89 47.5-164.5T700-720ZM645-40q-54 0-89.5-38T520-173q0-23 7-44.5t15-38.5l257 52q-5 65-44 114.5T645-40Z" />
  </svg>
)