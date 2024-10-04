import React from 'react'
import { IconProps } from './types.js'

export const IconSpeakerGroupOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-200q-33 0-56.5-23.5T320-280v-560q0-33 23.5-56.5T400-920h360q33 0 56.5 23.5T840-840v560q0 33-23.5 56.5T760-200H400Zm180-460q25 0 42.5-17.5T640-720q0-25-17.5-42.5T580-780q-25 0-42.5 17.5T520-720q0 25 17.5 42.5T580-660Zm0 340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-80q-25 0-42.5-17.5T520-460q0-25 17.5-42.5T580-520q25 0 42.5 17.5T640-460q0 25-17.5 42.5T580-400Zm60 360H240q-33 0-56.5-23.5T160-120v-640h80v640h400v80Z" />
  </svg>
)