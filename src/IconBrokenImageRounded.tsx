import React from 'react'
import { IconProps } from './types'

const IconBrokenImageRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm40-337 132-132q12-12 28-12t28 12l132 132 132-132q12-12 28-12t28 12l12 12v-183H200v263l40 40Zm-40 257h560v-264l-40-40-132 132q-12 12-28 12t-28-12L400-504 268-372q-12 12-28 12t-28-12l-12-12v184Zm0 0v-264 80-376 560Z" />
  </svg>
)

export { IconBrokenImageRounded as default }
