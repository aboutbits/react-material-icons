import React from 'react'
import { IconProps } from './types.js'

export const IconHostRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h200q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H160Zm440 0q-33 0-56.5-23.5T520-200v-560q0-33 23.5-56.5T600-840h200q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H600Zm-440-80h200v-560H160v560Zm440 0h200v-560H600v560ZM320-400q0-17-11.5-28.5T280-440h-40q-17 0-28.5 11.5T200-400q0 17 11.5 28.5T240-360h40q17 0 28.5-11.5T320-400Zm440 0q0-17-11.5-28.5T720-440h-40q-17 0-28.5 11.5T640-400q0 17 11.5 28.5T680-360h40q17 0 28.5-11.5T760-400ZM320-520q0-17-11.5-28.5T280-560h-40q-17 0-28.5 11.5T200-520q0 17 11.5 28.5T240-480h40q17 0 28.5-11.5T320-520Zm440 0q0-17-11.5-28.5T720-560h-40q-17 0-28.5 11.5T640-520q0 17 11.5 28.5T680-480h40q17 0 28.5-11.5T760-520ZM320-640q0-17-11.5-28.5T280-680h-40q-17 0-28.5 11.5T200-640q0 17 11.5 28.5T240-600h40q17 0 28.5-11.5T320-640Zm440 0q0-17-11.5-28.5T720-680h-40q-17 0-28.5 11.5T640-640q0 17 11.5 28.5T680-600h40q17 0 28.5-11.5T760-640ZM160-200h200-200Zm440 0h200-200Z" />
  </svg>
)