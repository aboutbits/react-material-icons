import React from 'react'
import { IconProps } from './types'

export const IconAnimatedImagesSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-420 240-160-240-160v320ZM148-75 74-672l126-14v486h532l5 53-589 72Zm132-205v-600h600v600H280Z" />
  </svg>
)
