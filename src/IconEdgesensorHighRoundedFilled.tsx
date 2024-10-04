import React from 'react'
import { IconProps } from './types.js'

export const IconEdgesensorHighRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-280q-17 0-28.5-11.5T0-320v-200q0-17 11.5-28.5T40-560q17 0 28.5 11.5T80-520v200q0 17-11.5 28.5T40-280Zm120-120q-17 0-28.5-11.5T120-440v-200q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640v200q0 17-11.5 28.5T160-400ZM320-80q-33 0-56.5-23.5T240-160v-640q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v640q0 33-23.5 56.5T640-80H320Zm480-200q-17 0-28.5-11.5T760-320v-200q0-17 11.5-28.5T800-560q17 0 28.5 11.5T840-520v200q0 17-11.5 28.5T800-280Zm120-120q-17 0-28.5-11.5T880-440v-200q0-17 11.5-28.5T920-680q17 0 28.5 11.5T960-640v200q0 17-11.5 28.5T920-400ZM320-280h320v-400H320v400Z" />
  </svg>
)