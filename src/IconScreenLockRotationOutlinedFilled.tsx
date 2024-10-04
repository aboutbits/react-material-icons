import React from 'react'
import { IconProps } from './types.js'

export const IconScreenLockRotationOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-42q-99 0-186.5-38T181-183q-65-65-103-152.5T40-522h80q0 72 24.5 137T212-268q43 52 102 88.5T441-129L336-234l56-56L628-54q-27 6-53 9t-55 3Zm114-558q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T720-920q33 0 56.5 23.5T800-840v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H634Zm46-200h80v-40q0-17-11.5-28.5T720-880q-17 0-28.5 11.5T680-840v40ZM536-224 222-538q-23-23-23-54t23-54l174-174q23-23 54-23t54 23l16 16v170q0 48 33 81t81 33h169l15 14q23 23 23 54t-23 54L644-224q-23 23-54 23t-54-23Z" />
  </svg>
)