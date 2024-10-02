import React from 'react'
import { IconProps } from './types'

export const IconMarkEmailUnreadRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h360q17 0 28.5 11.5T560-760q0 17-11.5 28.5T520-720H160v480h640v-280q0-17 11.5-28.5T840-560q17 0 28.5 11.5T880-520v280q0 33-23.5 56.5T800-160H160Zm0-560v480-480Zm320 200 129-80q14-9 26.5-4.5T655-589q7 11 5 24t-16 22l-143 90q-10 6-21 6t-21-6L160-640v-80l320 200Zm280-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)
