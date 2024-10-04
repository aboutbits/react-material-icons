import React from 'react'
import { IconProps } from './types.js'

export const IconInkPenRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M611-461 461-612l111-110-29-29-191 191q-12 12-28 12t-28-12q-12-12-12-28.5t12-28.5l190-190q24-24 56.5-24t56.5 24l29 29 50-50q12-12 28.5-12t28.5 12l93 93q12 12 12 28.5T828-678L611-461ZM160-120q-17 0-28.5-11.5T120-160v-77q0-16 6-30.5t17-25.5l261-262 151 150-262 262q-11 11-25.5 17t-30.5 6h-77Z" />
  </svg>
)