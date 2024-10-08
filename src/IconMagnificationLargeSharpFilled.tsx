import React from 'react'
import { IconProps } from './types'

const IconMagnificationLargeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-360h480v-320H200v320ZM80-160v-640h800v640H80Z" />
  </svg>
)

export { IconMagnificationLargeSharpFilled as default }
