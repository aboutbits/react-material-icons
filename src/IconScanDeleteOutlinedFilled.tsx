import React from 'react'
import { IconProps } from './types'

export const IconScanDeleteOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-600h200L520-800v200Zm116 500-56-56 84-84-84-84 56-56 84 84 84-84 56 56-83 84 83 84-56 56-84-83-84 83ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v174q-19-7-39.5-10.5T719-480q-100 0-169.5 69.5T480-241q0 45 16 86.5T542-80H240Z" />
  </svg>
)
