import React from 'react'
import { IconProps } from './types.js'

export const IconPublicOffSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 701-146q-48 32-103.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701L27-820l57-57L876-85l-57 57ZM440-162v-78h-80v-120L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm374-99-58-58q21-37 32.5-77.5T800-480q0-98-54.5-179T600-776v96H440v45L261-814q48-31 103-48.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 61-17.5 116T814-261Z" />
  </svg>
)