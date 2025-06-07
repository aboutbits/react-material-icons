import React from 'react'
import { IconProps } from './types.js'

export const IconWifiFindOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-120 0-601q93-93 215.5-146T480-800q142 0 264.5 53T960-601l-75 76q-30-51-82.5-83T680-640q-100 0-170 70t-70 170q0 69 32.5 122.5T554-195l-74 75Zm384-40L761-262q-18 11-38 16.5t-43 5.5q-68 0-114-46t-46-114q0-68 46-114t114-46q68 0 114 46t46 114q0 23-5.5 43T818-319l102 103-56 56ZM680-320q34 0 57-23t23-57q0-34-23-57t-57-23q-34 0-57 23t-23 57q0 34 23 57t57 23Z" />
  </svg>
)
