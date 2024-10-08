import React from 'react'
import { IconProps } from './types'

const IconAutoReadPauseRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-400q17 0 28.5-11.5T440-440v-240q0-17-11.5-28.5T400-720q-17 0-28.5 11.5T360-680v240q0 17 11.5 28.5T400-400Zm160 0q17 0 28.5-11.5T600-440v-240q0-17-11.5-28.5T560-720q-17 0-28.5 11.5T520-680v240q0 17 11.5 28.5T560-400ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
  </svg>
)

export { IconAutoReadPauseRounded as default }
