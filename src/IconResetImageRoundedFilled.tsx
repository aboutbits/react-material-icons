import React from 'react'
import { IconProps } from './types.js'

export const IconResetImageRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-600H160q-17 0-28.5-11.5T120-640v-160q0-17 11.5-28.5T160-840q17 0 28.5 11.5T200-800v94q50-62 122.5-98T480-840q99 0 179.5 48T788-666q8 14 4.5 30T775-612q-14 8-30.5 4.5T720-625q-37-61-100-98t-140-37q-57 0-107.5 21T284-680h36q17 0 28.5 11.5T360-640q0 17-11.5 28.5T320-600Zm-40 360h400q12 0 18-11t-2-21L586-419q-6-8-16-8t-16 8L450-280l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11ZM200-80q-33 0-56.5-23.5T120-160v-280q0-17 11.5-28.5T160-480q17 0 28.5 11.5T200-440v280h560v-280q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v280q0 33-23.5 56.5T760-80H200Z" />
  </svg>
)