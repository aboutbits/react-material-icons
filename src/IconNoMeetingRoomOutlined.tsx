import React from 'react'
import { IconProps } from './types.js'

export const IconNoMeetingRoomOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m760-314-80-80v-326h-80v246l-80-80v-206H314l-80-80h366v40h160v486Zm32 258L600-248v128H120v-80h80v-448L56-792l56-56 736 736-56 56ZM280-200h240v-128L280-568v368Zm137-457Zm-17 209Z" />
  </svg>
)
