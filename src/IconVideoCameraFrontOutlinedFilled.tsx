import React from 'react'
import { IconProps } from './types'

const IconVideoCameraFrontOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-320h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Zm160-160q33 0 56.5-23.5T480-560q0-33-23.5-56.5T400-640q-33 0-56.5 23.5T320-560q0 33 23.5 56.5T400-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Z" />
  </svg>
)

export { IconVideoCameraFrontOutlinedFilled as default }
