import React from 'react'
import { IconProps } from './types'

const IconSplitscreenLandscapeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-320h120q17 0 28.5-11.5T720-360v-240q0-17-11.5-28.5T680-640H560q-17 0-28.5 11.5T520-600v240q0 17 11.5 28.5T560-320Zm-280 0h120q17 0 28.5-11.5T440-360v-240q0-17-11.5-28.5T400-640H280q-17 0-28.5 11.5T240-600v240q0 17 11.5 28.5T280-320ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)

export { IconSplitscreenLandscapeRoundedFilled as default }
