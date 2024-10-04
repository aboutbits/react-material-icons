import React from 'react'
import { IconProps } from './types'

const IconEntOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80H444l25-240h131v-80H477l5-44q2-15 13-25.5t26-10.5h159v-80H522q-47 0-81 31t-39 77L364-80H240Z" />
  </svg>
)

export { IconEntOutlinedFilled as default }
