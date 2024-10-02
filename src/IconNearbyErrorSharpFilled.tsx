import React from 'react'
import { IconProps } from './types'

export const IconNearbyErrorSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-240v-320h80v320h-80Zm40 160q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80ZM480-48 48-480l432-432 240 240v144L480-768 192-480l288 288 240-240v144L480-48Zm0-256L304-480l176-176 176 176-176 176Z" />
  </svg>
)
