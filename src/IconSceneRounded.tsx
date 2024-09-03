import React from 'react'
import { IconProps } from './types'

const IconSceneRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-80v-600q0-33-23.5-56.5T720-760h-40v52q0 12-8 20t-20 8H428q-14 0-22.5-15t-1.5-29l76-164q7-15 20.5-23.5T532-920h92q24 0 40 18t16 42v20h40q66 0 113 47t47 113v600h-80ZM508-760h92v-80h-56l-36 80ZM200-80q-51 0-85.5-34.5T80-200v-100q0-33 22-61.5t58-34.5v-84q0-33 23.5-56.5T240-560h320q33 0 56.5 23.5T640-480v84q36 6 58 33t22 63v100q0 51-34.5 85.5T600-80H200Zm40-400v100q18 15 29 35.5t11 44.5v20h240v-20q0-24 11-44.5t29-35.5v-100H240Zm-40 320h400q18 0 29-12.5t11-27.5v-100q0-9-5.5-14.5T620-320q-9 0-14.5 5.5T600-300v100H200v-100q0-9-5.5-14.5T180-320q-9 0-14.5 5.5T160-300v100q0 15 11 27.5t29 12.5Zm320-120H280h240ZM240-480h320-320Zm-40 320h400-400Z" />
  </svg>
)

export { IconSceneRounded as default }