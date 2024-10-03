import React from 'react'
import { IconProps } from './types.js'

export const IconBakeryDiningSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M481-240Zm323-42 34-34-58-108-42 108 66 34Zm-200-38h48l102-253-124-49-26 302Zm-296 0h48l-26-302-124 49 102 253Zm-152 38 66-34-42-108-58 108 34 34Zm280-38h88l32-360H404l32 360ZM141-183 25-299l115-221-38-97 220-88-5-55h325l-4 55 220 88-38 95 116 222-115 115-113-55H250l-109 57Z" />
  </svg>
)
