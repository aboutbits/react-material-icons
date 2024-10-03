import React from 'react'
import { IconProps } from './types.js'

export const IconDeveloperBoardOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M793-280 640-434v-86h-86l-41-40h127v-120H480v87l-40-40v-47h-46L233-840h567v160h80v80h-80v80h80v80h-80v80h80v80h-87Zm-553 0h200v-160H240v160ZM128-833l672 672v41H80v-713h48Zm352 352v201h160v-41L480-481ZM281-680h-41v200h200v-41L281-680ZM819-28 27-820l57-57L876-85l-57 57Z" />
  </svg>
)
