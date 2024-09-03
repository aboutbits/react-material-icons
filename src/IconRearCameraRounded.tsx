import React from 'react'
import { IconProps } from './types'

const IconRearCameraRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m268-348 104-104q12-12 12-28t-12-28L268-612q-11-11-28-11t-28 11q-11 11-11 28t11 28l36 36H120q-17 0-28.5 11.5T80-480q0 17 11.5 28.5T120-440h128l-36 36q-11 11-11 28t11 28q11 11 28 11t28-11Zm392-292q17 0 28.5-11.5T700-680q0-17-11.5-28.5T660-720q-17 0-28.5 11.5T620-680q0 17 11.5 28.5T660-640ZM520-200h280v-560H520v560Zm-360 80q-33 0-56.5-23.5T80-200v-120q0-17 11.5-28.5T120-360q17 0 28.5 11.5T160-320v120h280v-560H160v120q0 17-11.5 28.5T120-600q-17 0-28.5-11.5T80-640v-120q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm280-640v560-560Z" />
  </svg>
)

export { IconRearCameraRounded as default }
