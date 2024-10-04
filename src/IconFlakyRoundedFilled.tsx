import React from 'react'
import { IconProps } from './types.js'

export const IconFlakyRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM350-568l35 36q9 9 21 9t21-9q9-9 9-21.5t-9-21.5l-35-35 36-35q9-9 9-21t-9-21q-9-9-21.5-9t-21.5 9l-35 35-35-36q-9-9-21-9t-21 9q-9 9-9 21.5t9 21.5l35 35-36 35q-9 9-9 21t9 21q9 9 21.5 9t21.5-9l35-35Zm130 408q133 0 226.5-93.5T800-480q0-66-25-124t-69-102L254-254q44 44 102 69t124 25Zm82-181 79-78q9-8 21-8.5t21 8.5q9 9 9 21t-9 21l-93 93q-12 12-28 12t-28-12l-47-47q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l32 32Z" />
  </svg>
)
