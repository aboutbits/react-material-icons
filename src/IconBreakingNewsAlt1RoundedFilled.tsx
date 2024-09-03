import React from 'react'
import { IconProps } from './types'

const IconBreakingNewsAlt1RoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h120q17 0 28.5-11.5T440-320q0-17-11.5-28.5T400-360H280q-17 0-28.5 11.5T240-320q0 17 11.5 28.5T280-280Zm0-160h120q17 0 28.5-11.5T440-480q0-17-11.5-28.5T400-520H280q-17 0-28.5 11.5T240-480q0 17 11.5 28.5T280-440Zm400-240q-17 0-28.5 11.5T640-640v160q0 17 11.5 28.5T680-440q17 0 28.5-11.5T720-480v-160q0-17-11.5-28.5T680-680Zm-400 80h120q17 0 28.5-11.5T440-640q0-17-11.5-28.5T400-680H280q-17 0-28.5 11.5T240-640q0 17 11.5 28.5T280-600ZM160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm520-160q17 0 28.5-11.5T720-320q0-17-11.5-28.5T680-360q-17 0-28.5 11.5T640-320q0 17 11.5 28.5T680-280Z" />
  </svg>
)

export { IconBreakingNewsAlt1RoundedFilled as default }
