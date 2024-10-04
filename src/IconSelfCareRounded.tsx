import React from 'react'
import { IconProps } from './types'

const IconSelfCareRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-40q-17 0-28.5-11.5T600-80q0-17 11.5-28.5T640-120h120v-40H640q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240h120v-40H640q-17 0-28.5-11.5T600-320q0-17 11.5-28.5T640-360h120v-40H640q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480h120v-40H640q-17 0-28.5-11.5T600-560q0-17 11.5-28.5T640-600h120v-40H640q-17 0-28.5-11.5T600-680q0-17 11.5-28.5T640-720h160q33 0 56.5 23.5T880-640v520q0 33-23.5 56.5T800-40H640ZM320-360q66 0 113-65t47-155q0-90-47-155t-113-65q-66 0-113 65t-47 155q0 90 47 155t113 65Zm0 320q-48 0-79-35.5T217-159l16-141q-68-33-110.5-108.5T80-580q0-125 70-212.5T320-880q100 0 170 87.5T560-580q0 96-42.5 171.5T407-300l16 141q7 48-24 83.5T320-40Z" />
  </svg>
)

export { IconSelfCareRounded as default }
