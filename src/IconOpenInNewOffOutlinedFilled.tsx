import React from 'react'
import { IconProps } from './types'

export const IconOpenInNewOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m791-55-65-65H200q-33 0-56.5-23.5T120-200v-526l-65-65 57-57 736 736-57 57ZM200-200h446L451-395l-63 63-56-56 63-63-195-195v446Zm114-560-80-80h246v80H314Zm251 251-56-56 195-195H560v-80h280v280h-80v-144L565-509Zm275 275-80-80v-166h80v246Z" />
  </svg>
)
