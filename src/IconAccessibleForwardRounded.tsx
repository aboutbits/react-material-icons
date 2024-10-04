import React from 'react'
import { IconProps } from './types.js'

export const IconAccessibleForwardRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-80q-83 0-141.5-58.5T120-280q0-69 43-123t110-71q16-4 30 4.5t18 24.5q4 16-4.5 30T292-397q-41 10-66.5 42.5T200-280q0 50 35 85t85 35q41 0 73-25t43-64q5-16 19-24.5t30-3.5q16 5 24.5 19t3.5 30q-18 66-71.5 107T320-80Zm320-620q-33 0-56.5-23.5T560-780q0-33 23.5-56.5T640-860q33 0 56.5 23.5T720-780q0 33-23.5 56.5T640-700ZM440-320q-44 0-68-37.5t-6-78.5l74-164h-91l-11 28q-5 14-19 21.5t-29 2.5q-17-5-25-20.5t-1-32.5l12-31q9-23 29.5-35.5T350-680h208q45 0 68.5 36.5T632-566l-66 146h114q33 0 56.5 23.5T760-340v180q0 17-11.5 28.5T720-120q-17 0-28.5-11.5T680-160v-160H440Z" />
  </svg>
)
