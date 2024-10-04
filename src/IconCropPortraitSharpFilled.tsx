import React from 'react'
import { IconProps } from './types'

const IconCropPortraitSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h640v800H160Z" />
  </svg>
)

export { IconCropPortraitSharpFilled as default }
