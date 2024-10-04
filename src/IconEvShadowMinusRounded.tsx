import React from 'react'
import { IconProps } from './types'

const IconEvShadowMinusRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-200q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h240q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200H600ZM445-80q-61 0-132-36t-116-81q-57-57-87-130T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q78 0 146.5 27t121 74.5Q800-731 834-666t43 141q2 18-9.5 31.5T838-480q-15 0-26.5-9.5T798-514q-5-29-9.5-50.5T770-615L432-278q13 16 27.5 30.5T491-220q20 16 27 40t-2 48q-8 23-28 37.5T445-80Zm-56-267 337-337q-11-12-22-23.5T680-729L367-415q4 18 9 34.5t13 33.5Zm-26-178 247-247q-8-3-14.5-6.5T581-784q-86 28-145.5 97.5T363-525Zm-203 45q0 121 78.5 212T436-161q-72-55-114-138.5T280-480q0-97 42-179.5T436-797q-118 16-197 105.5T160-480Zm423-27Z" />
  </svg>
)

export { IconEvShadowMinusRounded as default }
