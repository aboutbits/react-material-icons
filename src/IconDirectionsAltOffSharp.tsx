import React from 'react'
import { IconProps } from './types'

export const IconDirectionsAltOffSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 640-208 480-48 48-480l160-160L27-820l57-57L876-85l-57 57ZM584-264l-60-60-44 44-56-56 43-44-60-60H280v-80h47l-63-64-104 104 320 320 104-104Zm170-58-56-56 102-102-320-320-102 102-56-56 158-158 432 432-158 158ZM638-438l42-42-200-200-42 42 200 200ZM538-538ZM424-424Z" />
  </svg>
)
