import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsInputComponentRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-40v-168q-35-12-57.5-42.5T40-320v-80h240v80q0 39-22.5 69.5T200-208v168h-80Zm320 0v-168q-35-12-57.5-42.5T360-320v-80h240v80q0 39-22.5 69.5T520-208v168h-80Zm320 0v-168q-35-12-57.5-42.5T680-320v-80h240v80q0 39-22.5 69.5T840-208v168h-80ZM40-480v-200q0-17 11.5-28.5T80-720h40v-160q0-17 11.5-28.5T160-920q17 0 28.5 11.5T200-880v160h40q17 0 28.5 11.5T280-680v200H40Zm320 0v-200q0-17 11.5-28.5T400-720h40v-160q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v160h40q17 0 28.5 11.5T600-680v200H360Zm320 0v-200q0-17 11.5-28.5T720-720h40v-160q0-17 11.5-28.5T800-920q17 0 28.5 11.5T840-880v160h40q17 0 28.5 11.5T920-680v200H680Z" />
  </svg>
)
