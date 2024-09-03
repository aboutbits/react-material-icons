import React from 'react'
import { IconProps } from './types'

const IconIdCardRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-440q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520H600q-17 0-28.5 11.5T560-480q0 17 11.5 28.5T600-440h120Zm0-120q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640H600q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560h120ZM360-440q-36 0-65 6.5T244-413q-21 13-32 29.5T201-348q0 12 9 20t22 8h256q13 0 22-8.5t9-21.5q0-17-11-33t-32-30q-22-14-51-20.5t-65-6.5Zm0-40q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
)

export { IconIdCardRounded as default }