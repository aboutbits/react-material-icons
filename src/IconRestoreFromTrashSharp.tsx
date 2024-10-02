import React from 'react'
import { IconProps } from './types'

export const IconRestoreFromTrashSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-320h80v-166l64 62 56-56-160-160-160 160 56 56 64-62v166ZM200-120v-600h-40v-80h200v-40h240v40h200v80h-40v600H200Zm80-80h400v-520H280v520Zm0-520v520-520Z" />
  </svg>
)
