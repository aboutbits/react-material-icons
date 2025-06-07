import React from 'react'
import { IconProps } from './types.js'

export const IconDirectionsAltOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 640-208 536-104q-12 12-26.5 18T480-80q-15 0-29.5-6T424-104L104-424q-12-12-18-26.5T80-480q0-15 6-29.5t18-26.5l104-104L27-820l57-57L876-85l-57 57ZM480-280l44-44-57-56-43 44 56 56Zm274-42L638-438l42-42-200-200-42 42-116-116 102-102q12-12 26.5-18t29.5-6q15 0 29.5 6t26.5 18l320 320q12 12 18 26.5t6 29.5q0 15-6 29.5T856-424L754-322ZM280-440h127l-80-80h-47v80Z" />
  </svg>
)
