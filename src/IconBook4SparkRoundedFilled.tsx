import React from 'react'
import { IconProps } from './types.js'

export const IconBook4SparkRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-320q17 0 28.5-11.5T360-360v-400q0-17-11.5-28.5T320-800q-17 0-28.5 11.5T280-760v400q0 17 11.5 28.5T320-320ZM760-80H240q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h272q-34 35-53 81t-19 99q0 103 69.5 177T680-441v121q0 33-23.5 56.5T600-240H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-287q22-5 42-13.5t38-20.5v321q0 33-23.5 56.5T760-80Zm-60-400q0-92 64-156t156-64q-92 0-156-64t-64-156q0 92-64 156t-156 64q92 0 156 64t64 156Z" />
  </svg>
)
