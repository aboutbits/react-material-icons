import React from 'react'
import { IconProps } from './types.js'

export const IconAlignJustifyStretchOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-80v-800h80v800h-80ZM80-80v-800h80v800H80Zm440-480v-120h200v120H520Zm-280 0v-120h200v120H240Zm280 280v-120h200v120H520Zm-280 0v-120h200v120H240Z" />
  </svg>
)
