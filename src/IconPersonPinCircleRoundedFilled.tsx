import React from 'react'
import { IconProps } from './types.js'

export const IconPersonPinCircleRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Zm0-453q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0 200q42 0 79.5-17t66.5-48q5-5 7.5-11.5T636-450q0-11-5.5-20T616-485q-32-17-66-26t-70-9q-36 0-70 9t-66 26q-9 5-14 14t-5 20q0 7 2 13.5t7 12.5q29 31 66.5 48t79.5 17Z" />
  </svg>
)
