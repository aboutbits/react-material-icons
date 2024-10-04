import React from 'react'
import { IconProps } from './types.js'

export const IconNestFoundSavingsRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160H600l-92 92q-12 12-28 12t-28-12l-92-92Zm-160-80h192l88 88 88-88h192v-560H200v560Zm280-280Zm0 200q86 0 143-60t57-140v-160q0-17-11.5-28.5T640-720H480q-81 0-140.5 57T280-520q0 30 8.5 57t23.5 50l-16 16q-12 12-12 28t12 28q12 12 27.5 11.5T352-341l15-14q24 17 52.5 26t60.5 9Zm0-80q-15 0-28.5-4T426-414l104-104q12-12 12-28.5T530-575q-12-12-28-12t-28 12L370-471q-5-11-7.5-23.5T360-520q0-52 36-86t84-34h120v120q0 50-35 85t-85 35Zm-16-109Z" />
  </svg>
)
