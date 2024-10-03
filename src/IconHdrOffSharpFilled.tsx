import React from 'react'
import { IconProps } from './types.js'

export const IconHdrOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 56-792l56-56 736 734-56 58Zm-12-304-36-80h-44v66l-60-60v-166h170l30 30v96l-30 30h-6l36 84h-60Zm-80-140h80v-40h-80v40Zm-120 6L474-600h76l30 30v76ZM120-360v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60Zm260-164 60 60v44h45l59 60H380v-164Z" />
  </svg>
)
