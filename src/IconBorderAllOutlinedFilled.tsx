import React from 'react'
import { IconProps } from './types'

export const IconBorderAllOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-120v-320h320v320H520Zm0-400v-320h320v320H520Zm-400 0v-320h320v320H120Zm0 400v-320h320v320H120Z" />
  </svg>
)
