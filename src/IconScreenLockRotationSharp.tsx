import React from 'react'
import { IconProps } from './types'

export const IconScreenLockRotationSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-42q-99 0-186.5-38T181-183q-65-65-103-152.5T40-522h80q0 72 24.5 137T212-268q43 52 102 88.5T441-129L336-234l56-56L628-54q-27 6-53 9t-55 3Zm80-558v-200h40v-40q0-33 23.5-56.5T720-920q33 0 56.5 23.5T800-840v40h40v200H600Zm80-200h80v-40q0-17-11.5-28.5T720-880q-17 0-28.5 11.5T680-840v40Zm38 306 56-56 98 98-282 282-422-422 282-282 98 98-54 58-44-44-170 170 310 310 170-170-42-42Zm-198-28Z" />
  </svg>
)
