import React from 'react'
import { IconProps } from './types'

const IconStopScreenShareRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M577-497 474-600h46v-56q0-7 6-9.5t11 2.5l89 89q6 6 6 14t-6 14l-49 49Zm251 251-74-74h46v-440H314l-80-80h566q33 0 56.5 23.5T880-760v440q0 26-14.5 45.5T828-246ZM728-120H80q-17 0-28.5-11.5T40-160q0-17 11.5-28.5T80-200h567l-40-40H160q-33 0-56.5-23.5T80-320v-446l-25-26q-11-12-11-28t12-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11l-64-64ZM400-446v6q0 17-11.5 28.5T360-400q-17 0-28.5-11.5T320-440v-40q0-11 1-21t6-19L160-687v367h366L400-446Zm134-94Zm-191 36Z" />
  </svg>
)

export { IconStopScreenShareRounded as default }
