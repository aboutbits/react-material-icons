import React from 'react'
import { IconProps } from './types.js'

export const IconMimoDisconnectSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120v-80l40-40H80v-593h47l73 73h-40v440h368L28-820l56-56L876-84l-56 56-212-212h72l40 40v80H240Zm588-126-28-28v-486H314l-80-80h646v594h-52ZM557-517Zm-213 13Z" />
  </svg>
)
