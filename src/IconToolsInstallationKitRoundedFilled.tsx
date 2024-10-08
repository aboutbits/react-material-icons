import React from 'react'
import { IconProps } from './types'

const IconToolsInstallationKitRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-160q-134 0-227-93T40-480q0-134 93-227t227-93h240q134 0 227 93t93 227q0 134-93 227t-227 93H360Zm120-240q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm-40-200h80q17 0 28.5-11.5T560-640q0-17-11.5-28.5T520-680h-80q-17 0-28.5 11.5T400-640q0 17 11.5 28.5T440-600Zm0 320h80q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360h-80q-17 0-28.5 11.5T400-320q0 17 11.5 28.5T440-280Zm200-120q17 0 28.5-11.5T680-440v-80q0-17-11.5-28.5T640-560q-17 0-28.5 11.5T600-520v80q0 17 11.5 28.5T640-400Zm-320 0q17 0 28.5-11.5T360-440v-80q0-17-11.5-28.5T320-560q-17 0-28.5 11.5T280-520v80q0 17 11.5 28.5T320-400Z" />
  </svg>
)

export { IconToolsInstallationKitRoundedFilled as default }
