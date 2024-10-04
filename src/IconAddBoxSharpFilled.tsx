import React from 'react'
import { IconProps } from './types'

const IconAddBoxSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM120-120v-720h720v720H120Z" />
  </svg>
)

export { IconAddBoxSharpFilled as default }
