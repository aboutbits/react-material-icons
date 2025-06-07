import React from 'react'
import { IconProps } from './types.js'

export const Icon8kPlusSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-360h180v-240H240v240Zm60-40v-60h60v60h-60Zm0-100v-60h60v60h-60Zm140 140h60v-90l70 90h70l-90-120 90-120h-70l-70 90v-90h-60v240Zm220-40h40v-60h60v-40h-60v-60h-40v60h-60v40h60v60ZM120-120v-720h720v720H120Z" />
  </svg>
)
