import React from 'react'
import { IconProps } from './types'

export const IconTransitionChopSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-640h800v640H80Zm175-80h545v-480H627l93 360-465 120Z" />
  </svg>
)
