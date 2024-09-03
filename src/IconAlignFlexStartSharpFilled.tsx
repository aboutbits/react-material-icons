import React from 'react'
import { IconProps } from './types'

const IconAlignFlexStartSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-800v-80h800v80H80Zm340 640v-560h120v560H420Z" />
  </svg>
)

export { IconAlignFlexStartSharpFilled as default }
