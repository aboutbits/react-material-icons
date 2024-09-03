import React from 'react'
import { IconProps } from './types'

const IconKeyboardAltSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-120v-680h880v680H40Zm80-80h720v-520H120v520Zm200-80h320v-40H320v40ZM200-400h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM120-200v-520 520Z" />
  </svg>
)

export { IconKeyboardAltSharp as default }
