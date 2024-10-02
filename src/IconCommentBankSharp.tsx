import React from 'react'
import { IconProps } from './types'

export const IconCommentBankSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M500-520v-280H160v525l46-45h594v-480H700v280l-100-60-100 60ZM80-80v-800h800v640H240L80-80Zm80-720v480-480Z" />
  </svg>
)
