import React from 'react'
import { IconProps } from './types'

export const IconTextSnippetSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h480l240 240v480H120Zm160-160h400v-80H280v80Zm0-160h400v-80H280v80Zm0-160h280v-80H280v80Z" />
  </svg>
)
