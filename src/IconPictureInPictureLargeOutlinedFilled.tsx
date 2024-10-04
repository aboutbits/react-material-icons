import React from 'react'
import { IconProps } from './types'

const IconPictureInPictureLargeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-160v-80h720v-560h80v560q0 33-23.5 56.5T800-160H80Zm160-160v-400h480v400H240Z" />
  </svg>
)

export { IconPictureInPictureLargeOutlinedFilled as default }
