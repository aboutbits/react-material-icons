import React from 'react'
import { IconProps } from './types'

export const IconHideImageSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-234 234-840h606v606ZM792-56l-64-64H120v-608l-64-64 56-56 736 736-56 56ZM240-280h327l-84-84-33 44-90-120-120 160Z" />
  </svg>
)
