import React from 'react'
import { IconProps } from './types.js'

export const IconMonitorHeartRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-160q0-17 11.5-28.5T120-440h175l69 138q5 11 15 16.5t21 5.5q11 0 21-5.5t15-16.5l124-248 44 88q5 11 15 16.5t21 5.5h200q17 0 28.5 11.5T880-400v160q0 33-23.5 56.5T800-160H160ZM80-720q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q0 17-11.5 28.5T840-520H665l-69-138q-5-11-15-15.5t-21-4.5q-11 0-21 4.5T524-658L400-410l-44-88q-5-11-15-16.5t-21-5.5H120q-17 0-28.5-11.5T80-560v-160Z" />
  </svg>
)
