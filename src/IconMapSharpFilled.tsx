import React from 'react'
import { IconProps } from './types'

export const IconMapSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m600-120-240-84-240 93v-647l240-82 240 84 240-93v647l-240 82Zm-40-98v-468l-160-56v468l160 56Z" />
  </svg>
)
