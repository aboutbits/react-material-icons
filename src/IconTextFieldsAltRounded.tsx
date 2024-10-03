import React from 'react'
import { IconProps } from './types.js'

export const IconTextFieldsAltRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200h720q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200Zm640-110v-500q0-13 8.5-21.5T790-840q13 0 21.5 8.5T820-810v500q0 13-8.5 21.5T790-280q-13 0-21.5-8.5T760-310ZM308-424l-41 115q-5 14-16.5 21.5T225-280q-23 0-36.5-19.5T183-341l176-469q5-14 17-22t26-8h36q15 0 26.5 8t16.5 22l177 470q8 22-5.5 41T616-280q-14 0-26-8t-17-22l-39-114H308Zm28-80h168l-82-232h-4l-82 232Z" />
  </svg>
)
