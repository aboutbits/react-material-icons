import React from 'react'
import { IconProps } from './types'

export const IconSlideshowSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m380-300 280-180-280-180v360ZM120-120v-720h720v720H120Z" />
  </svg>
)
