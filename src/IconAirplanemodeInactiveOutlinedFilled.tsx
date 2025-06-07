import React from 'react'
import { IconProps } from './types.js'

export const IconAirplanemodeInactiveOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m880-280-141-57-339-337v-126q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176l320 224v120ZM480-140 280-80v-100l120-84v-144L80-280v-120l216-152L56-792l56-56 736 736-56 56-232-232v24l120 84v100l-200-60Z" />
  </svg>
)
