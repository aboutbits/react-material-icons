import React from 'react'
import { IconProps } from './types'

const IconClearAllRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h480q17 0 28.5 11.5T680-320q0 17-11.5 28.5T640-280H160Zm80-160q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h480q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H240Zm80-160q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h480q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H320Z" />
  </svg>
)

export { IconClearAllRoundedFilled as default }
