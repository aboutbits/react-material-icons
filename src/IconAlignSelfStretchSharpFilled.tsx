import React from 'react'
import { IconProps } from './types'

export const IconAlignSelfStretchSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-800v-80h800v80H80Zm0 720v-80h800v80H80Zm340-180v-460h120v460H420Z" />
  </svg>
)
