import React from 'react'
import { IconProps } from './types'

export const IconWarningOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-40-120v-161l80 80v81h-80Zm433 158L655-419 480-720l-47 80-58-58 105-182 393 678Zm-695 2h469L350-497 178-200ZM819-28l-92-92H40l252-435L27-820l57-57L876-85l-57 57ZM499-348Zm45-181Z" />
  </svg>
)
