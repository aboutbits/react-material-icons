import React from 'react'
import { IconProps } from './types'

const IconNoteAddSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-240h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z" />
  </svg>
)

export { IconNoteAddSharpFilled as default }
