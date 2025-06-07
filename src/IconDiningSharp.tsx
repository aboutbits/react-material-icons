import React from 'react'
import { IconProps } from './types.js'

export const IconDiningSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200h60v-270q26-8 43-28.5t17-49.5v-152h-40v100h-30v-100h-40v100h-30v-100h-40v152q0 29 17 49.5t43 28.5v270Zm240 0h60v-254q33-16 51.5-51t18.5-82q0-57-28.5-95T590-720q-43 0-71.5 38T490-587q0 47 18.5 82t51.5 51v254ZM80-80v-800h800v800H80Zm80-80h640v-640H160v640Zm0 0v-640 640Z" />
  </svg>
)
