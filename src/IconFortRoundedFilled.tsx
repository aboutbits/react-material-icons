import React from 'react'
import { IconProps } from './types'

const IconFortRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-200v-47q0-16 6-30.5T63-303l57-57v-240l-57-57q-11-11-17-25.5T40-713v-87q0-17 11.5-28.5T80-840q17 0 28.5 11.5T120-800v40h80v-40q0-17 11.5-28.5T240-840q17 0 28.5 11.5T280-800v40h80v-40q0-17 11.5-28.5T400-840q17 0 28.5 11.5T440-800v87q0 16-6 30.5T417-657l-57 57v40h240v-40l-57-57q-11-11-17-25.5t-6-30.5v-87q0-17 11.5-28.5T560-840q17 0 28.5 11.5T600-800v40h80v-40q0-17 11.5-28.5T720-840q17 0 28.5 11.5T760-800v40h80v-40q0-17 11.5-28.5T880-840q17 0 28.5 11.5T920-800v87q0 16-6 30.5T897-657l-57 57v240l57 57q11 11 17 25.5t6 30.5v47q0 33-23.5 56.5T840-120H600q-17 0-28.5-11.5T560-160v-80q0-33-23.5-56.5T480-320q-33 0-56.5 23.5T400-240v80q0 17-11.5 28.5T360-120H120q-33 0-56.5-23.5T40-200Z" />
  </svg>
)

export { IconFortRoundedFilled as default }
