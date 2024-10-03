import React from 'react'
import { IconProps } from './types.js'

export const IconMosqueSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-638v-38q0-40 19-74t51-56l170-114 170 114q32 22 51 56t19 74v38H240ZM40-120v-491q-18-11-29-28.5T0-680q0-23 24-56t56-64q32 31 56 64t24 56q0 23-11 40.5T120-611v171h80v-158h560v158h80v-171q-18-11-29-28.5T800-680q0-23 24-56t56-64q32 31 56 64t24 56q0 23-11 40.5T920-611v491H560v-240H400v240H40Z" />
  </svg>
)
