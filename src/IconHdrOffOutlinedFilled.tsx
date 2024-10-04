import React from 'react'
import { IconProps } from './types.js'

export const IconHdrOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M792-56 56-792l56-56 736 734-56 58Zm-12-304-36-80h-44v66l-60-60v-166h140q24 0 42 18t18 42v40q0 18-10.5 32.5T804-444l36 84h-60Zm-80-140h80v-40h-80v40Zm-120 6L474-600h46q24 0 42 18t18 42v46ZM120-360v-240h60v80h80v-80h60v240h-60v-100h-80v100h-60Zm260-164 60 60v44h45l55 56q-5 2-10 3t-10 1H380v-164Z" />
  </svg>
)