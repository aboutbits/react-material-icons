import React from 'react'
import { IconProps } from './types'

const IconHideImageOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-234 234-840h526q33 0 56.5 23.5T840-760v526ZM792-56l-64-64H200q-33 0-56.5-23.5T120-200v-528l-64-64 56-56 736 736-56 56ZM240-280h327l-84-84-33 44-90-120-120 160Z" />
  </svg>
)

export { IconHideImageOutlinedFilled as default }
