import React from 'react'
import { IconProps } from './types'

export const IconTimer10Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-320h120v-320H560v320ZM440-200v-560h360v560H440Zm-200 0v-440h-80v-120h200v560H240Z" />
  </svg>
)
