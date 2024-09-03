import React from 'react'
import { IconProps } from './types'

const IconFormatImageLeftRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280q-17 0-28.5-11.5T120-320v-320q0-17 11.5-28.5T160-680h320q17 0 28.5 11.5T520-640v320q0 17-11.5 28.5T480-280H160Zm40-80h240v-240H200v240Zm-40-400q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760H160Zm480 160q-17 0-28.5-11.5T600-640q0-17 11.5-28.5T640-680h160q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600H640Zm0 160q-17 0-28.5-11.5T600-480q0-17 11.5-28.5T640-520h160q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H640Zm0 160q-17 0-28.5-11.5T600-320q0-17 11.5-28.5T640-360h160q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280H640ZM160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h640q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Z" />
  </svg>
)

export { IconFormatImageLeftRoundedFilled as default }
