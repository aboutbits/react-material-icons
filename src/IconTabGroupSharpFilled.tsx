import React from 'react'
import { IconProps } from './types'

export const IconTabGroupSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-640h80v560h560v80H80Zm160-160v-640h640v640H240Zm280-400h280v-160H520v160Z" />
  </svg>
)
