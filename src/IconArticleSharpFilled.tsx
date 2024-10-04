import React from 'react'
import { IconProps } from './types'

const IconArticleSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80ZM120-120v-720h720v720H120Z" />
  </svg>
)

export { IconArticleSharpFilled as default }
