import React from 'react'
import { IconProps } from './types'

export const IconStackOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m880-194-80-80v-286H514l-80-80h446v446ZM560-720v-80H274l-80-80h446v160h-80Zm97 303ZM400-160h286L400-446v286ZM823-23l-57-57H320v-446L160-686v286h80v80H80v-446l-57-57 57-57L880-80l-57 57ZM543-303Z" />
  </svg>
)
