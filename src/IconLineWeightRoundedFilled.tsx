import React from 'react'
import { IconProps } from './types.js'

export const IconLineWeightRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M140-160q-8 0-14-6t-6-14q0-8 6-14t14-6h680q8 0 14 6t6 14q0 8-6 14t-14 6H140Zm20-120q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h640q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280H160Zm0-160q-17 0-28.5-11.5T120-480v-40q0-17 11.5-28.5T160-560h640q17 0 28.5 11.5T840-520v40q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680v-80q0-17 11.5-28.5T160-800h640q17 0 28.5 11.5T840-760v80q0 17-11.5 28.5T800-640H160Z" />
  </svg>
)