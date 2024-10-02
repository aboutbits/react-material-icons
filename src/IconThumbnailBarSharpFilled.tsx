import React from 'react'
import { IconProps } from './types'

export const IconThumbnailBarSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h240v640H80Zm320 0v-640h480v640H400Z" />
  </svg>
)
