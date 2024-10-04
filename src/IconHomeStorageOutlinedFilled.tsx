import React from 'react'
import { IconProps } from './types'

const IconHomeStorageOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m200-120-80-480h720l-80 480H200Zm200-240h160q17 0 28.5-11.5T600-400q0-17-11.5-28.5T560-440H400q-17 0-28.5 11.5T360-400q0 17 11.5 28.5T400-360ZM240-640q-17 0-28.5-11.5T200-680q0-17 11.5-28.5T240-720h480q17 0 28.5 11.5T760-680q0 17-11.5 28.5T720-640H240Zm80-120q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760H320Z" />
  </svg>
)

export { IconHomeStorageOutlinedFilled as default }
