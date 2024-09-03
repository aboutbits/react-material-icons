import React from 'react'
import { IconProps } from './types'

const IconPaddingSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-600h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM120-120v-720h720v720H120Z" />
  </svg>
)

export { IconPaddingSharpFilled as default }
