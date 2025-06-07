import React from 'react'
import { IconProps } from './types.js'

export const IconNestWakeOnPressSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M760-440v-360h120v360H760ZM284-120 80-335l48-49 152 34v-430q0-25 17.5-42.5T340-840q25 0 42.5 17.5T400-780v240h56l231 116-43 304H284Z" />
  </svg>
)
