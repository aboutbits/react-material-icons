import React from 'react'
import { IconProps } from './types'

const IconPictureInPictureSmallSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-80h720v-560h80v640H80Zm320-160v-240h320v240H400Z" />
  </svg>
)

export { IconPictureInPictureSmallSharpFilled as default }
