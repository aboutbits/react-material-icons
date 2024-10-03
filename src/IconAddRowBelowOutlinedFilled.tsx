import React from 'react'
import { IconProps } from './types.js'

export const IconAddRowBelowOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-560v-320h720v320H120Zm0 400v-320h720v320H676q2-10 3-19.5t1-20.5q0-83-58-141.5T480-400q-84 0-142 58.5T280-200q0 11 1 20.5t3 19.5H120Zm320 80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)
