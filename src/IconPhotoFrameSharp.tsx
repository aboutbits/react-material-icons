import React from 'react'
import { IconProps } from './types'

export const IconPhotoFrameSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120v-80H40v-600h880v600H760v80H200Zm-80-160h720v-440H120v440Zm80-80h560L580-600 440-420 340-540 200-360Zm-80 80v-440 440Z" />
  </svg>
)
