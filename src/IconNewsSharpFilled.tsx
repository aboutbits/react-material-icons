import React from 'react'
import { IconProps } from './types.js'

export const IconNewsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h520l200 200v520H120Zm480-640v160h160L600-760ZM280-280h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Z" />
  </svg>
)
