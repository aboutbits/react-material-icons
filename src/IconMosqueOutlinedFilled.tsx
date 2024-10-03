import React from 'react'
import { IconProps } from './types.js'

export const IconMosqueOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M278-638q-21 0-29.5-8.5T240-676q0-40 19-74t51-56l170-114 170 114q32 22 51 56t19 74q0 21-8.5 29.5T682-638H278ZM40-120v-491q-18-11-29-28.5T0-680q0-23 24-56t56-64q32 31 56 64t24 56q0 23-11 40.5T120-611v171h80v-80q0-25 16-48t46-30h436q30 7 46 30t16 48v80h80v-171q-18-11-29-28.5T800-680q0-23 24-56t56-64q32 31 56 64t24 56q0 23-11 40.5T920-611v491H560v-160q0-33-23.5-56.5T480-360q-33 0-56.5 23.5T400-280v160H40Z" />
  </svg>
)
