import React from 'react'
import { IconProps } from './types.js'

export const IconDrySharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M599-640q5-41-.5-64.5T569-758q-31-40-41.5-77t-3.5-85h76q-8 51 5 75t36 56q26 35 34 69.5t1 79.5h-77Zm161 0q5-41-1-64.5T729-758q-31-40-41-77t-3-85h75q-8 51 5 75t36 56q26 35 34 69.5t1 79.5h-76Zm0 560H80v-441l385-250 65 65-78 126h348v80H308l77-124-225 146v318h600v80ZM480-360v-80h400v80H480Zm0 140v-80h360v80H480ZM320-342Z" />
  </svg>
)
