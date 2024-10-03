import React from 'react'
import { IconProps } from './types.js'

export const IconEdgesensorHighSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-280v-280h80v280H0Zm120-120v-280h80v280h-80ZM240-80v-800h480v800H240Zm400-120H320v40h320v-40ZM320-760h320v-40H320v40Zm440 480v-280h80v280h-80Zm120-120v-280h80v280h-80ZM320-760v-40 40Zm0 560v40-40Zm0-80h320v-400H320v400Z" />
  </svg>
)
