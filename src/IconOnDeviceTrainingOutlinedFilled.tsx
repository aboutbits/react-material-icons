import React from 'react'
import { IconProps } from './types.js'

export const IconOnDeviceTrainingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-280v-40h80v40h-80Zm0-60v-31q-19-11-29.5-29.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 21-10.5 39.5T520-371v31h-80Zm200 18-42-43q11-17 16.5-36t5.5-39q0-20-5.5-39T598-515l42-43q20 26 30 56t10 62q0 32-10 62t-30 56Zm-320 0q-20-26-30-56t-10-62q0-83 58.5-141.5T480-640v-50l90 80-90 80v-50q-58 0-99 41t-41 99q0 20 5.5 39t16.5 36l-42 43ZM240-40q-33 0-56.5-23.5T160-120v-720q0-33 23.5-56.5T240-920h480q33 0 56.5 23.5T800-840v720q0 33-23.5 56.5T720-40H240Zm0-200h480v-480H240v480Z" />
  </svg>
)