import React from 'react'
import { IconProps } from './types'

export const IconContentCopySharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-240v-640h520v640H280ZM120-80v-640h80v560h440v80H120Z" />
  </svg>
)
