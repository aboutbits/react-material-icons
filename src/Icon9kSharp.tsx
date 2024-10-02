import React from 'react'
import { IconProps } from './types'

export const Icon9kSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-360h180v-240H260v140h120v40H260v60Zm60-140v-60h60v60h-60Zm200 140h60v-90l70 90h73l-93-120 93-120h-73l-70 90v-90h-60v240ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z" />
  </svg>
)
