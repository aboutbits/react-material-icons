import React from 'react'
import { IconProps } from './types'

const IconAddRowAboveSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-80v-320h720v320H120Zm0-400v-320h164q-2 10-3 19.5t-1 20.5q0 83 58 141.5T480-560q84 0 142-58.5T680-760q0-11-1-20.5t-3-19.5h164v320H120Zm320-160v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
  </svg>
)

export { IconAddRowAboveSharpFilled as default }
