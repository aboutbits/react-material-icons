import React from 'react'
import { IconProps } from './types.js'

export const IconDeleteForeverRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm200-284 76 76q11 11 28 11t28-11q11-11 11-28t-11-28l-76-76 76-76q11-11 11-28t-11-28q-11-11-28-11t-28 11l-76 76-76-76q-11-11-28-11t-28 11q-11 11-11 28t11 28l76 76-76 76q-11 11-11 28t11 28q11 11 28 11t28-11l76-76Z" />
  </svg>
)