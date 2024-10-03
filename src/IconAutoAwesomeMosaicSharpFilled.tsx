import React from 'react'
import { IconProps } from './types.js'

export const IconAutoAwesomeMosaicSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120H120v-720h320v720Zm80-400v-320h320v320H520Zm0 400v-320h320v320H520Z" />
  </svg>
)
