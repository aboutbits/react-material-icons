import React from 'react'
import { IconProps } from './types'

const IconArrowsMoreDownRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-120q-17 0-28.5-11.5T200-160v-360q0-17 11.5-28.5T240-560q17 0 28.5 11.5T280-520v320h320q17 0 28.5 11.5T640-160q0 17-11.5 28.5T600-120H240Zm200-200q-17 0-28.5-11.5T400-360v-360q0-17 11.5-28.5T440-760q17 0 28.5 11.5T480-720v320h320q17 0 28.5 11.5T840-360q0 17-11.5 28.5T800-320H440Z" />
  </svg>
)

export { IconArrowsMoreDownRounded as default }
