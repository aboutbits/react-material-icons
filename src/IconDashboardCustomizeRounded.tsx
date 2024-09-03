import React from 'react'
import { IconProps } from './types'

const IconDashboardCustomizeRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-520q-17 0-28.5-11.5T120-560v-240q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v240q0 17-11.5 28.5T400-520H160Zm40-240v160-160Zm360 240q-17 0-28.5-11.5T520-560v-240q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v240q0 17-11.5 28.5T800-520H560Zm40-240v160-160ZM160-120q-17 0-28.5-11.5T120-160v-240q0-17 11.5-28.5T160-440h240q17 0 28.5 11.5T440-400v240q0 17-11.5 28.5T400-120H160Zm40-240v160-160Zm480 240q-17 0-28.5-11.5T640-160v-80h-81q-17 0-28-11.5T520-280q0-17 11.5-28.5T560-320h80v-81q0-17 11.5-28t28.5-11q17 0 28.5 11.5T720-400v80h81q17 0 28 11.5t11 28.5q0 17-11.5 28.5T800-240h-80v81q0 17-11.5 28T680-120Zm-80-640v160h160v-160H600Zm-400 0v160h160v-160H200Zm0 400v160h160v-160H200Z" />
  </svg>
)

export { IconDashboardCustomizeRounded as default }
