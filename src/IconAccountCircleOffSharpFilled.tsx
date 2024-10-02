import React from 'react'
import { IconProps } from './types'

export const IconAccountCircleOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160q43 0 84-11.5t78-33.5L487-360h-7q-67 0-130 21.5T234-276q50 55 110 85.5T480-160ZM819-28 701-146q-49 32-105 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-59 16.5-115T145-701L27-820l57-57L876-85l-57 57Zm-5-232L586-488q17-19 25.5-42.5T620-580q0-58-41-99t-99-41q-26 0-49.5 8.5T388-686L260-814q49-32 105-49t115-17q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 59-17 115t-49 105Z" />
  </svg>
)
