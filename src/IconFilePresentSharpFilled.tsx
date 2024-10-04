import React from 'react'
import { IconProps } from './types'

const IconFilePresentSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-200q67 0 113.5-47T640-360v-160h-80v160q0 33-23 56.5T480-280q-33 0-56.5-23.5T400-360v-220q0-9 6-14.5t14-5.5q9 0 14.5 5.5T440-580v220h80v-220q0-42-29-71t-71-29q-42 0-71 29t-29 71v220q0 66 47 113t113 47ZM160-80v-800h440l200 200v600H160Zm400-720v160h160L560-800Z" />
  </svg>
)

export { IconFilePresentSharpFilled as default }
