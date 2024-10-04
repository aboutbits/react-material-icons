import React from 'react'
import { IconProps } from './types'

const IconEntSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l64 255H760v200H600v80H444l25-240h131v-80H477l9-80h194v-80H413L364-80H240Z" />
  </svg>
)

export { IconEntSharpFilled as default }
