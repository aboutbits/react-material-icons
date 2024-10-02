import React from 'react'
import { IconProps } from './types'

export const IconTabMoveSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-200h80v120h560v-480H200v120h-80v-280h720v720H120Zm340-140-56-56 83-84H120v-80h367l-83-84 56-56 180 180-180 180Z" />
  </svg>
)
