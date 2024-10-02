import React from 'react'
import { IconProps } from './types'

export const Icon10kSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360h60v-240H200v60h40v180Zm100 0h180v-240H340v240Zm60-60v-120h60v120h-60Zm160 60h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240ZM120-120v-720h720v720H120Z" />
  </svg>
)
