import React from 'react'
import { IconProps } from './types.js'

export const IconHomeAndGardenSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160v-375l-72 55-47-63 440-337 439 337-16 21q-45-31-99-37t-105 14q-60-23-123.5-10.5T465-495q-48 48-60.5 111.5T415-260q-10 24-13 49t-1 51H160Zm540 95q-42 29-92.5 24.5T521-81q-36-36-40.5-86.5T505-260q-29-42-24.5-92.5T521-439q36-36 86.5-40.5T700-455q42-29 92.5-24.5T879-439q36 36 40.5 86.5T895-260q29 42 24.5 92.5T879-81q-36 36-86.5 40.5T700-65Zm0-145q21 0 35.5-14.5T750-260q0-21-14.5-35.5T700-310q-21 0-35.5 14.5T650-260q0 21 14.5 35.5T700-210Z" />
  </svg>
)
