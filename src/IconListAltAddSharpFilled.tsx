import React from 'react'
import { IconProps } from './types'

const IconListAltAddSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-40v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 160h240v-80H440v80Zm0-160h240v-80H440v80ZM120-120v-720h720v433q-27-16-57.5-24t-62.5-8q-53 0-99 21t-79 58H440v80h54q-7 19-10.5 39t-3.5 41q0 20 3 40t10 40H120Z" />
  </svg>
)

export { IconListAltAddSharpFilled as default }
