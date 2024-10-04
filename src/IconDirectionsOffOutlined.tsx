import React from 'react'
import { IconProps } from './types'

const IconDirectionsOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 640-208 536-104q-12 12-26.5 18T480-80q-15 0-29.5-6T424-104L104-424q-12-12-18-26.5T80-480q0-15 6-29.5t18-26.5l104-104L27-820l57-57L876-85l-57 57ZM584-264 264-584 160-480l320 320 104-104Zm170-58-56-56 102-102-320-320-102 102-56-56 102-102q12-12 26.5-18t29.5-6q15 0 29.5 6t26.5 18l320 320q12 12 18 26.5t6 29.5q0 15-6 29.5T856-424L754-322ZM538-538ZM424-424Zm-104 64v-160q0-17 11.5-28.5T360-560h41l80 80h-81v120h-80Zm298-98 62-62-140-140v100h-24l102 102Z" />
  </svg>
)

export { IconDirectionsOffOutlined as default }
