import React from 'react'
import { IconProps } from './types'

const IconGoToLineSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-680v-120h120v120H420Zm0 520v-120h120v120H420Z" />
  </svg>
)

export { IconGoToLineSharpFilled as default }
