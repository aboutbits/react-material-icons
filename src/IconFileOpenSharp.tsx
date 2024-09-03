import React from 'react'
import { IconProps } from './types'

const IconFileOpenSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h400l240 240v240h-80v-200H520v-200H240v640h360v80H160Zm718 15L760-183v89h-80v-226h226v80h-90l118 118-56 57Zm-638-95v-640 640Z" />
  </svg>
)

export { IconFileOpenSharp as default }
