import React from 'react'
import { IconProps } from './types'

const IconUploadFileSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z" />
  </svg>
)

export { IconUploadFileSharpFilled as default }
