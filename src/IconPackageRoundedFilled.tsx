import React from 'react'
import { IconProps } from './types'

const IconPackageRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm178-349 102-51 102 51q20 10 39-1.5t19-34.5v-255H320v255q0 23 19 34.5t39 1.5Zm-58 189h120q17 0 28.5-11.5T480-320q0-17-11.5-28.5T440-360H320q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Z" />
  </svg>
)

export { IconPackageRoundedFilled as default }
