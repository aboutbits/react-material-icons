import React from 'react'
import { IconProps } from './types'

export const IconSpeakerGroupSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-200v-720h520v720H320Zm260-460q25 0 42.5-17.5T640-720q0-25-17.5-42.5T580-780q-25 0-42.5 17.5T520-720q0 25 17.5 42.5T580-660Zm0 340q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-80q-25 0-42.5-17.5T520-460q0-25 17.5-42.5T580-520q25 0 42.5 17.5T640-460q0 25-17.5 42.5T580-400Zm60 360H160v-720h80v640h400v80Z" />
  </svg>
)
