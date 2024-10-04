import React from 'react'
import { IconProps } from './types.js'

export const IconGuardianSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-40q-186 0-313-69.5T40-280q0-69 64-126.5T280-494v82q-73 23-116.5 59T120-280q0 64 108 112t252 48q144 0 252-48t108-112q0-37-43.5-73T680-412v-82q112 30 176 87.5T920-280q0 101-127 170.5T480-40ZM360-200v-440H160v-80h640v80H600v440h-80v-200h-80v200h-80Zm120-560q-33 0-56.5-23.5T400-840q0-33 23.5-56.5T480-920q33 0 56.5 23.5T560-840q0 33-23.5 56.5T480-760Z" />
  </svg>
)