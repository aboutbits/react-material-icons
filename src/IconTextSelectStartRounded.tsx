import React from 'react'
import { IconProps } from './types.js'

export const IconTextSelectStartRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-760q-17 0-28.5-11.5T440-800q0-17 11.5-28.5T480-840q17 0 28.5 11.5T520-800q0 17-11.5 28.5T480-760Zm160 0q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760Zm160 0q-17 0-28.5-11.5T760-800q0-17 11.5-28.5T800-840q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760Zm0 160q-17 0-28.5-11.5T760-640q0-17 11.5-28.5T800-680q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600Zm0 160q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440Zm0 160q-17 0-28.5-11.5T760-320q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280ZM480-120q-17 0-28.5-11.5T440-160q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160q0 17-11.5 28.5T480-120Zm160 0q-17 0-28.5-11.5T600-160q0-17 11.5-28.5T640-200q17 0 28.5 11.5T680-160q0 17-11.5 28.5T640-120Zm160 0q-17 0-28.5-11.5T760-160q0-17 11.5-28.5T800-200q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120Zm-640 0q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-560h-40q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h160q17 0 28.5 11.5T360-800q0 17-11.5 28.5T320-760h-40v560h40q17 0 28.5 11.5T360-160q0 17-11.5 28.5T320-120H160Z" />
  </svg>
)
