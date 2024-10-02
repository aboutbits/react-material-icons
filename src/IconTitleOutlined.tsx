import React from 'react'
import { IconProps } from './types'

export const IconTitleOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-160v-520H200v-120h560v120H540v520H420Z" />
  </svg>
)
