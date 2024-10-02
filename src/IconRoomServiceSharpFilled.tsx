import React from 'react'
import { IconProps } from './types'

export const IconRoomServiceSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-200v-80h800v80H80Zm40-120v-40q0-128 78.5-226T400-710v-90h160v90q124 26 202 124t78 226v40H120Z" />
  </svg>
)
