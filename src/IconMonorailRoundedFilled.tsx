import React from 'react'
import { IconProps } from './types'

export const IconMonorailRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80q-17 0-28.5-11.5T240-120q0-17 11.5-28.5T280-160h160v-80q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240v80h160q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H280Zm40-800h320q66 0 113 47t47 113v380q0 58-41 99t-99 41h-60q-17 0-28.5-11.5T560-240q0-33-23.5-56.5T480-320q-33 0-56.5 23.5T400-240q0 17-11.5 28.5T360-200h-60q-58 0-99-41t-41-99v-380q0-66 47-113t113-47Zm-80 200v120h480v-120H240Z" />
  </svg>
)
