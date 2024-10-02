import React from 'react'
import { IconProps } from './types'

export const IconShoppingmodeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M479-47 80-446l432-434h400v400L479-47Zm0-113 353-354v-286H546L193-446l286 286Zm253-480q25 0 42.5-17.5T792-700q0-25-17.5-42.5T732-760q-25 0-42.5 17.5T672-700q0 25 17.5 42.5T732-640ZM513-480Z" />
  </svg>
)
