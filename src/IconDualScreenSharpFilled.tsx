import React from 'react'
import { IconProps } from './types'

export const IconDualScreenSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-202v-678l400 161v677L160-202Zm480 2v-574L378-880h422v680H640Z" />
  </svg>
)
