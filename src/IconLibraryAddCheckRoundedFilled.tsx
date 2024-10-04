import React from 'react'
import { IconProps } from './types.js'

export const IconLibraryAddCheckRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m508-512-58-57q-11-11-27.5-11T394-568q-11 11-11 28t11 28l86 86q12 12 28 12t28-12l170-170q12-12 11.5-28T706-652q-12-12-28.5-12.5T649-653L508-512ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Z" />
  </svg>
)