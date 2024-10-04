import React from 'react'
import { IconProps } from './types.js'

export const IconStackOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M880-194 434-640h366q33 0 56.5 23.5T880-560v366ZM560-720v-80H274l-80-80h366q33 0 56.5 23.5T640-800v80h-80ZM823-23l-57-57H400q-34 0-57-23t-23-57v-366L160-686v286h80v80h-80q-34 0-57-23t-23-57v-366l-57-57 57-57L880-80l-57 57Z" />
  </svg>
)