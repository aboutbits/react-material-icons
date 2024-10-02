import React from 'react'
import { IconProps } from './types'

export const IconAddAlertRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h40q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm-40-360v40q0 17 11.5 28.5T480-360q17 0 28.5-11.5T520-400v-40h40q17 0 28.5-11.5T600-480q0-17-11.5-28.5T560-520h-40v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40h-40q-17 0-28.5 11.5T360-480q0 17 11.5 28.5T400-440h40Z" />
  </svg>
)
