import React from 'react'
import { IconProps } from './types'

export const IconWrongLocationOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q17 0 35 2t35 4l96 96-84 84 113 113 84-84 31 32q4 20 7 40t3 41q0 100-79.5 217.5T480-80Zm195-558-56-56 84-84-84-84 56-56 84 84 84-84 56 56-84 84 84 84-56 56-84-84-84 84Z" />
  </svg>
)
