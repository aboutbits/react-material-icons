import React from 'react'
import { IconProps } from './types'

export const Icon4gMobiledataSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-120H120v-280h80v200h80v-200h80v200h80v80h-80v120h-80Zm200 0v-400h360v80H560v240h200v-80H660v-80h180v240H480Z" />
  </svg>
)
