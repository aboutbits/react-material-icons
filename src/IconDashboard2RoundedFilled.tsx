import React from 'react'
import { IconProps } from './types.js'

export const IconDashboard2RoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-160q-17 0-28.5-11.5T600-200v-200q0-17 11.5-28.5T640-440h200q17 0 28.5 11.5T880-400v200q0 17-11.5 28.5T840-160H640ZM480-520q-17 0-28.5-11.5T440-560v-200q0-17 11.5-28.5T480-800h360q17 0 28.5 11.5T880-760v200q0 17-11.5 28.5T840-520H480ZM120-160q-17 0-28.5-11.5T80-200v-200q0-17 11.5-28.5T120-440h360q17 0 28.5 11.5T520-400v200q0 17-11.5 28.5T480-160H120Zm0-360q-17 0-28.5-11.5T80-560v-200q0-17 11.5-28.5T120-800h200q17 0 28.5 11.5T360-760v200q0 17-11.5 28.5T320-520H120Z" />
  </svg>
)