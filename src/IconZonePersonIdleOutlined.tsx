import React from 'react'
import { IconProps } from './types'

const IconZonePersonIdleOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-78 528-370l-16 78H352l40-204-72 28v136h-80v-188l96-41L27-870l57-57 792 792-57 57Zm-659-54q-33 0-56.5-23.5T80-212v-120h80v120h120v80H160Zm640-600v-120H680v-80h120q33 0 56.5 23.5T880-852v120h-80Zm-720 0v-120q0-17 6.5-31.5T103-909l57 58v119H80Zm600 600v-80h119l57 56q-10 11-24.5 17.5T800-132H680ZM273-852l-80-80h87v80h-7Zm607 607-80-80v-7h80v87ZM540-632q-33 0-56.5-23.5T460-712q0-33 23.5-56.5T540-792q33 0 56.5 23.5T620-712q0 33-23.5 56.5T540-632Z" />
  </svg>
)

export { IconZonePersonIdleOutlined as default }