import React from 'react'
import { IconProps } from './types'

export const IconAdminPanelSettingsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v122q0 17-15 27.5t-32 5.5q-18-5-36-7.5t-37-2.5q-116 0-198 82t-82 198q0 32 7.5 62.5T429-156q9 19-5.5 34t-33.5 6q-42-22-77-54t-62-70q-43-59-67-129.5T160-516Zm520 236q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q25 0 47-9.5t39-27.5q5-6 4-13.5t-9-11.5q-19-9-39.5-13.5T680-240q-21 0-41.5 4.5T599-222q-8 4-9 11.5t4 13.5q17 18 39 27.5t47 9.5Z" />
  </svg>
)
