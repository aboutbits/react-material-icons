import React from 'react'
import { IconProps } from './types'

export const IconCleanHandsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-80v-440h160v440H40Zm520 0-280-79v-361h79l321 120v80H520l-70-27-14 37 84 30h360v80L560-80Zm40-414-230-86H210q17-51 56.5-88t93.5-48v-84h-60v-80h220q34 0 64 11t55 30l-57 57q-14-8-29.5-13t-32.5-5h-80v84q69 14 114.5 68.5T600-520v26Zm160-66q-33 0-56.5-23.5T680-640q0-23 17-57t63-103q46 69 63 103t17 57q0 33-23.5 56.5T760-560Z" />
  </svg>
)
