import React from 'react'
import { IconProps } from './types'

export const IconPictureInPictureMobileSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-80H160v-800h640v800ZM680-440v-320H440v320h240Z" />
  </svg>
)
