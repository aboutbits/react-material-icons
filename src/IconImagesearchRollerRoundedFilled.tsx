import React from 'react'
import { IconProps } from './types'

const IconImagesearchRollerRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-40H440q-17 0-28.5-11.5T400-80v-240q0-17 11.5-28.5T440-360h40v-120H160q-33 0-56.5-23.5T80-560v-160q0-33 23.5-56.5T160-800h80v-40q0-17 11.5-28.5T280-880h480q17 0 28.5 11.5T800-840v160q0 17-11.5 28.5T760-640H280q-17 0-28.5-11.5T240-680v-40h-80v160h320q33 0 56.5 23.5T560-480v120h40q17 0 28.5 11.5T640-320v240q0 17-11.5 28.5T600-40Z" />
  </svg>
)

export { IconImagesearchRollerRoundedFilled as default }
