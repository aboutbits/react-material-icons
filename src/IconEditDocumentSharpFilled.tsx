import React from 'react'
import { IconProps } from './types'

export const IconEditDocumentSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h400l240 240v84L480-237v157H160Zm400 0v-123l263-262 123 122L683-80H560Zm263-224 37-39-37-37-38 38 38 38ZM520-600h200L520-800l200 200-200-200v200Z" />
  </svg>
)
