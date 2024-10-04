import React from 'react'
import { IconProps } from './types'

const IconMusicVideoOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-280q42 0 71-29t29-71v-220h120v-80H480v220q-13-9-28-14.5t-32-5.5q-42 0-71 29t-29 71q0 42 29 71t71 29ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)

export { IconMusicVideoOutlinedFilled as default }
