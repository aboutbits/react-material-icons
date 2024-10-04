import React from 'react'
import { IconProps } from './types.js'

export const IconSwitchCameraRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm194-278h252l-34 34q-11 11-11 28t11 28q11 11 28 11t28-11l104-104q12-12 12-28t-12-28L628-572q-11-11-27.5-11.5T572-572q-11 11-11.5 27.5T571-516l37 38H352l37-38q11-11 11-27.5T388-572q-11-11-28-11t-28 11L228-468q-12 12-12 28t12 28l104 104q11 11 28 11t28-11q11-11 11-28t-11-28l-34-34Z" />
  </svg>
)