import React from 'react'
import { IconProps } from './types'

export const IconScreenshotFrameRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-680q-17 0-28.5-11.5T200-720v-80q0-33 23.5-56.5T280-880h80q17 0 28.5 11.5T400-840q0 17-11.5 28.5T360-800h-80v80q0 17-11.5 28.5T240-680Zm40 600q-33 0-56.5-23.5T200-160v-80q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240v80h80q17 0 28.5 11.5T400-120q0 17-11.5 28.5T360-80h-80Zm440-600q-17 0-28.5-11.5T680-720v-80h-80q-17 0-28.5-11.5T560-840q0-17 11.5-28.5T600-880h80q33 0 56.5 23.5T760-800v80q0 17-11.5 28.5T720-680ZM600-80q-17 0-28.5-11.5T560-120q0-17 11.5-28.5T600-160h80v-80q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240v80q0 33-23.5 56.5T680-80h-80Z" />
  </svg>
)
