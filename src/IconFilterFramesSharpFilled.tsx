import React from 'react'
import { IconProps } from './types'

export const IconFilterFramesSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-720h240l160-160 160 160h240v720H80Zm80-80h640v-560H160v560Zm80-80v-400h480v400H240Z" />
  </svg>
)
