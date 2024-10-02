import React from 'react'
import { IconProps } from './types'

export const IconProblemRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-320q17 0 28.5-11.5T320-360q0-17-11.5-28.5T280-400q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320Zm0-120q17 0 28.5-11.5T320-480v-120q0-17-11.5-28.5T280-640q-17 0-28.5 11.5T240-600v120q0 17 11.5 28.5T280-440Zm160 80h240q17 0 28.5-11.5T720-400q0-17-11.5-28.5T680-440H440q-17 0-28.5 11.5T400-400q0 17 11.5 28.5T440-360Zm0-160h240q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H440q-17 0-28.5 11.5T400-560q0 17 11.5 28.5T440-520ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z" />
  </svg>
)
