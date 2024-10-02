import React from 'react'
import { IconProps } from './types'

export const IconSplitscreenPortraitSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240h320v-200H320v200Zm0-280h320v-200H320v200ZM160-80v-800h640v800H160Z" />
  </svg>
)
