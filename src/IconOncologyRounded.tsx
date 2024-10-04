import React from 'react'
import { IconProps } from './types'

const IconOncologyRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-320q0-50 35-85t85-35h80q50 0 85-35t35-85q0-17-11.5-28.5T400-600q-33 0-56.5-23.5T320-680v-160q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v160q50 0 85 35t35 85q0 83-58.5 141.5T320-360h-80q-17 0-28.5 11.5T200-320v200q0 17-11.5 28.5T160-80q-17 0-28.5-11.5T120-120v-200Zm280-360v-200 200q50 0 85 35t35 85q0 83-58.5 141.5T320-360h-80q-17 0-28.5 11.5T200-320v240-240q0-17 11.5-28.5T240-360h80q83 0 141.5-58.5T520-560q0-50-35-85t-85-35Zm440 221q-17-16-37-27.5T760-506v-14q0-83-58.5-141.5T560-720q-33 0-56.5-23.5T480-800v-40q0-17 11.5-28.5T520-880q17 0 28.5 11.5T560-840v40q117 0 198.5 81.5T840-520v61ZM360-160v40q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120v-40q0-50 35-85t85-35h40q0 21 3.5 41t10.5 39h-54q-17 0-28.5 11.5T360-160Zm320-40q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200Zm0 80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-6 43.5T817-198l74 74q11 11 11 28t-11 28q-11 11-28 11t-28-11l-74-74q-18 11-38 16.5t-43 5.5Z" />
  </svg>
)

export { IconOncologyRounded as default }
