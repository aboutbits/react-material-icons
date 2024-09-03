import React from 'react'
import { IconProps } from './types'

const IconMoveGroupRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-240q-33 0-56.5-23.5T240-320v-40q0-17 11.5-28.5T280-400q17 0 28.5 11.5T320-360v40h480v-400H320v40q0 17-11.5 28.5T280-640q-17 0-28.5-11.5T240-680v-120q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm367-400H280q-17 0-28.5-11.5T240-520q0-17 11.5-28.5T280-560h247l-36-36q-11-11-11-27.5t12-28.5q11-11 28-11t28 11l104 104q12 12 12 28t-12 28L548-388q-11 11-27.5 11.5T492-388q-11-11-11-28t11-28l35-36Z" />
  </svg>
)

export { IconMoveGroupRounded as default }