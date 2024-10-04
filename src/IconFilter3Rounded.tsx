import React from 'react'
import { IconProps } from './types'

const IconFilter3Rounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-360q33 0 56.5-23.5T680-440v-60q0-26-17-43t-43-17q26 0 43-17t17-43v-60q0-33-23.5-56.5T600-760H480q-17 0-28.5 11.5T440-720q0 17 11.5 28.5T480-680h120v80h-40q-17 0-28.5 11.5T520-560q0 17 11.5 28.5T560-520h40v80H480q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360h120ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z" />
  </svg>
)

export { IconFilter3Rounded as default }
