import React from 'react'
import { IconProps } from './types'

const IconCameraRearRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-280q-17 0-28.5-11.5T200-320v-480q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v480q0 17-11.5 28.5T720-280H536q-12 0-23.5-5T493-298l-42-42q-23-23-57-23t-57 23l-42 42q-8 8-19.5 13t-23.5 5h-12Zm240-440q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720Zm-98 560H240q-17 0-28.5-11.5T200-200q0-17 11.5-28.5T240-240h142l-16-16q-11-11-11-28t11-28q11-11 28-11t28 11l84 84q11 11 11 28t-11 28l-84 84q-11 11-28 11t-28-11q-11-11-11-28t11-28l16-16Zm218 0q-17 0-28.5-11.5T560-200q0-17 11.5-28.5T600-240h120q17 0 28.5 11.5T760-200q0 17-11.5 28.5T720-160H600Z" />
  </svg>
)

export { IconCameraRearRoundedFilled as default }
