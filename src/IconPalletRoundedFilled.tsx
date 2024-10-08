import React from 'react'
import { IconProps } from './types'

const IconPalletRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160v50q0 17-11.5 28.5T160-70h-40q-17 0-28.5-11.5T80-110v-90q0-17 11.5-28.5T120-240h720q17 0 28.5 11.5T880-200v90q0 17-11.5 28.5T840-70h-40q-17 0-28.5-11.5T760-110v-50H540v50q0 17-11.5 28.5T500-70h-40q-17 0-28.5-11.5T420-110v-50H200Zm40-160q-17 0-28.5-11.5T200-360v-480q0-17 11.5-28.5T240-880h480q17 0 28.5 11.5T760-840v480q0 17-11.5 28.5T720-320H240Zm320-320q17 0 28.5-11.5T600-680q0-17-11.5-28.5T560-720H400q-17 0-28.5 11.5T360-680q0 17 11.5 28.5T400-640h160Z" />
  </svg>
)

export { IconPalletRoundedFilled as default }
