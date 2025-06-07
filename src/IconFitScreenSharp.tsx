import React from 'react'
import { IconProps } from './types.js'

export const IconFitScreenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-600v-120H680v-80h200v200h-80Zm-720 0v-200h200v80H160v120H80Zm600 440v-80h120v-120h80v200H680Zm-600 0v-200h80v120h120v80H80Zm160-160v-320h480v320H240Zm80-80h320v-160H320v160Zm0 0v-160 160Z" />
  </svg>
)
