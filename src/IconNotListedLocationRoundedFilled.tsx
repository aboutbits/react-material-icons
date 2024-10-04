import React from 'react'
import { IconProps } from './types.js'

export const IconNotListedLocationRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Zm0-213q17 0 29.5-12.5T522-362q0-17-12.5-29.5T480-404q-17 0-29.5 12.5T438-362q0 17 12.5 29.5T480-320Zm1-124q12 0 20.5-8.5T510-473q0-8 4-17.5t11-17.5q5-5 12-11.5t15-14.5q21-21 31.5-42t10.5-42q0-45-34-73.5T480-720q-34 0-63.5 17.5T373-654q-5 11-1 22.5t15 16.5q11 5 22.5 1t16.5-15q8-15 22.5-24t31.5-9q21 0 37.5 13t16.5 33q0 17-8 30t-31 32q-10 8-17 15t-12 15q-7 11-11 22t-4 21q0 14 8 25.5t22 11.5Z" />
  </svg>
)