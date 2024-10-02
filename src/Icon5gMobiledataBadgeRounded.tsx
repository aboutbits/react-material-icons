import React from 'react'
import { IconProps } from './types'

export const Icon5gMobiledataBadgeRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q-33 0-56.5-23.5T40-200v-560q0-33 23.5-56.5T120-840h720q33 0 56.5 23.5T920-760v560q0 33-23.5 56.5T840-120H120Zm0-80h720v-560H120v560Zm0 0v-560 560Zm440-80h120q33 0 56.5-23.5T760-360v-120q0-17-11.5-28.5T720-520h-40q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440v80H560v-240h200q0-33-23.5-56.5T680-680H560q-33 0-56.5 23.5T480-600v240q0 33 23.5 56.5T560-280Zm-200 0q33 0 56.5-23.5T440-360v-80q0-33-23.5-56.5T360-520h-80v-80h120q17 0 28.5-11.5T440-640q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v160q0 17 11.5 28.5T240-440h120v80H240q-17 0-28.5 11.5T200-320q0 17 11.5 28.5T240-280h120Z" />
  </svg>
)
