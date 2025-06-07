import React from 'react'
import { IconProps } from './types.js'

export const IconAlignJustifySpaceEvenOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-80v-800h80v800h-80ZM80-80v-800h80v800H80Zm480-200v-400h120v400H560Zm-280 0v-400h120v400H280Z" />
  </svg>
)
