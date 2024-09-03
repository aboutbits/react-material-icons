import React from 'react'
import { IconProps } from './types'

const IconRollerShadesSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-80h80v-640h640v640h80v80H80Zm160-400h480v-240H240v240Zm0 320h480v-240H520v72q14 10 22 25t8 33q0 29-20.5 49.5T480-240q-29 0-49.5-20.5T410-310q0-18 8-32.5t22-24.5v-73H240v240Zm0-560h480-480Z" />
  </svg>
)

export { IconRollerShadesSharp as default }
