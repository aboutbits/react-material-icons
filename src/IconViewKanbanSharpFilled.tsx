import React from 'react'
import { IconProps } from './types'

export const IconViewKanbanSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h80v-400h-80v400Zm160-200h80v-200h-80v200Zm160 120h80v-320h-80v320ZM120-120v-720h720v720H120Z" />
  </svg>
)
