import React from 'react'
import { IconProps } from './types'

export const Icon123Sharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M220-360v-180h-60v-60h120v240h-60Zm140 0v-140h120v-40H360v-60h180v140H420v40h120v60H360Zm240 0v-60h120v-40h-80v-40h80v-40H600v-60h180v240H600Z" />
  </svg>
)
