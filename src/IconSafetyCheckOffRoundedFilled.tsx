import React from 'react'
import { IconProps } from './types'

const IconSafetyCheckOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M662-186q-33 35-72.5 59T505-88q-6 2-12 3t-13 1q-4 0-25-4-135-45-215-166.5T160-516v-172l-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L662-186Zm-182-94q20 0 38.5-3.5T554-294L294-554q-7 17-10.5 35.5T280-480q0 83 58.5 141.5T480-280Zm274-38-88-88q7-17 10.5-35.5T680-480q0-83-58.5-141.5T480-680q-20 0-38 3.5T407-666L272-802l180-67q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 51-11.5 101T754-318Z" />
  </svg>
)

export { IconSafetyCheckOffRoundedFilled as default }
