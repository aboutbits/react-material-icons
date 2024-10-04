import React from 'react'
import { IconProps } from './types.js'

export const Icon8kSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-360h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm-260 0h180v-240H260v240Zm60-140v-60h60v60h-60Zm0 100v-60h60v60h-60ZM120-120v-720h720v720H120Z" />
  </svg>
)