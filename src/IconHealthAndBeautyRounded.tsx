import React from 'react'
import { IconProps } from './types'

const IconHealthAndBeautyRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80q-17 0-28.5-11.5T640-120q0-17 11.5-28.5T680-160h120v-80H680q-17 0-28.5-11.5T640-280q0-17 11.5-28.5T680-320h120v-80H680q-17 0-28.5-11.5T640-440q0-17 11.5-28.5T680-480h120v-80H680q-17 0-28.5-11.5T640-600q0-17 11.5-28.5T680-640h120v-80H680q-17 0-28.5-11.5T640-760q0-17 11.5-28.5T680-800h160q33 0 56.5 23.5T920-720v560q0 33-23.5 56.5T840-80H680Zm-424-80h128l118-326-124-74H262l-124 74 118 326Zm64-200ZM181-133 63-458q-10-27-.5-54T97-554l143-86v-200q0-17 11.5-28.5T280-880h80q17 0 28.5 11.5T400-840v200l143 86q25 15 34.5 42t-.5 54L459-133q-8 24-28.5 38.5T384-80H256q-26 0-46.5-14.5T181-133Z" />
  </svg>
)

export { IconHealthAndBeautyRounded as default }