import React from 'react'
import { IconProps } from './types'

export const Icon2dSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-360h180v-60H320v-40h120v-140H260v60h120v40H260v140ZM120-120v-720h720v720H120Zm400-240h170l30-30v-180l-30-30H520v240Zm60-60v-120h80v120h-80Z" />
  </svg>
)
