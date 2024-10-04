import React from 'react'
import { IconProps } from './types'

const IconDatasetLinkedRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v240q0 17-11.5 28.5T800-520H560q-37 0-70.5 10.5T427-480H320q-17 0-28.5 11.5T280-440v80q0 17 11.5 28.5T320-320h3q-2 10-2.5 19.5T320-280q0 18 3 36.5t8 35.5q5 18-4.5 33T300-160H200Zm360 40q-66 0-113-47t-47-113q0-66 47-113t113-47h40q17 0 28.5 11.5T640-400q0 17-11.5 28.5T600-360h-40q-33 0-56.5 23.5T480-280q0 33 23.5 56.5T560-200h40q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120h-40Zm40-120q-17 0-28.5-11.5T560-280q0-17 11.5-28.5T600-320h160q17 0 28.5 11.5T800-280q0 17-11.5 28.5T760-240H600Zm200 120h-40q-17 0-28.5-11.5T720-160q0-17 11.5-28.5T760-200h40q33 0 56.5-23.5T880-280q0-33-23.5-56.5T800-360h-40q-17 0-28.5-11.5T720-400q0-17 11.5-28.5T760-440h40q66 0 113 46.5T960-280q0 66-47 113t-113 47ZM280-680v80q0 17 11.5 28.5T320-560h80q17 0 28.5-11.5T440-600v-80q0-17-11.5-28.5T400-720h-80q-17 0-28.5 11.5T280-680Zm280 120h80q17 0 28.5-11.5T680-600v-80q0-17-11.5-28.5T640-720h-80q-17 0-28.5 11.5T520-680v80q0 17 11.5 28.5T560-560Z" />
  </svg>
)

export { IconDatasetLinkedRoundedFilled as default }
