import React from 'react'
import { IconProps } from './types'

const IconCreditCardHeartOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v213q-18-13-38-23t-42-17v-93H160v160h360q-39 38-61.5 89.5T436-280q0 32 7 62.5t20 57.5H160Zm556 20L576-280q-13-13-18.5-28t-5.5-30q0-32 23-57t59-25q28 0 44 13t38 35q20-20 36.5-34t45.5-14q37 0 59.5 25.5T880-337q0 15-6 30t-18 27L716-140Z" />
  </svg>
)

export { IconCreditCardHeartOutlinedFilled as default }
