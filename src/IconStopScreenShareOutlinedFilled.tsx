import React from 'react'
import { IconProps } from './types'

export const IconStopScreenShareOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m820-28-92-92H40v-80h607l-40-40H160q-33 0-56.5-23.5T80-320v-446l-52-54 56-56L876-84l-56 56ZM400-446l-73-74q-5 9-6 19t-1 21v80h80v-46Zm428 200L577-497l63-63-120-120v80h-46L234-840h566q33 0 56.5 23.5T880-760v440q0 26-14.5 45.5T828-246Z" />
  </svg>
)
