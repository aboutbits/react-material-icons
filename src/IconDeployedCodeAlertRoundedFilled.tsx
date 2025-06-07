import React from 'react'
import { IconProps } from './types.js'

export const IconDeployedCodeAlertRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-446q11 0 21-3t19-8l203-117q14-8 18-24.5t-4-30.5q-8-14-24-18t-30 4L480-526 277-643q-14-8-30-4t-24 18q-8 14-3.5 30.5T238-574l202 117q9 5 19 8t21 3ZM120-321v-318q0-22 10.5-40t29.5-29l280-161q10-5 19.5-8t20.5-3q11 0 21 3t19 8l280 161q19 11 29.5 29t10.5 40v136q0 18-15 28t-32 5q-17-5-35.5-7.5T720-480q-116 0-198 82t-82 198v20.5q0 9.5 2 17.5 4 25-14.5 39t-38.5 3L160-252q-19-11-29.5-29T120-321ZM720 0q-83 0-141.5-58.5T520-200q0-83 58.5-141.5T720-400q83 0 141.5 58.5T920-200q0 83-58.5 141.5T720 0Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Z" />
  </svg>
)
