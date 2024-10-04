import React from 'react'
import { IconProps } from './types.js'

export const IconEditorChoiceSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-40v-329L110-580l185-300h370l185 300-130 211v329l-240-80-240 80Zm100-760L204-580l136 220h280l136-220-136-220H340Zm98 383L296-558l57-57 85 85 169-170 57 56-226 227Z" />
  </svg>
)
