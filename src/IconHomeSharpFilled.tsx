import React from 'react'
import { IconProps } from './types'

const IconHomeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
  </svg>
)

export { IconHomeSharpFilled as default }
