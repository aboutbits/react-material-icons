import React from 'react'
import { IconProps } from './types.js'

export const IconPinInvokeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h360q17 0 28.5 11.5T560-760q0 17-11.5 28.5T520-720H160v480h640v-200q0-17 11.5-28.5T840-480q17 0 28.5 11.5T880-440v200q0 33-23.5 56.5T800-160H160Zm360-263-90 90q-12 12-28 11.5T374-334q-11-12-11.5-28t11.5-28l90-90h-50q-17 0-28.5-11.5T374-520q0-17 11.5-28.5T414-560h146q17 0 28.5 11.5T600-520v146q0 17-11.5 28.5T560-334q-17 0-28.5-11.5T520-374v-49Zm240-137q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z" />
  </svg>
)