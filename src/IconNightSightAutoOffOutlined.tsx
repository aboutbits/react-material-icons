import React from 'react'
import { IconProps } from './types'

export const IconNightSightAutoOffOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-585 272-713q38-23 80.5-35t87.5-12q5 0 10 .5t10 .5q-29 32-44.5 73T400-600v15Zm313 313-88-88q35 2 68-5.5t63-24.5q-5 32-15.5 61.5T713-272ZM552-520l128-360h80l128 360h-76l-28-80H656l-28 80h-76Zm122-134h92l-46-146-46 146ZM537-220 220-537q-10 23-15 47.5t-5 49.5q0 100 70 170t170 70q25 0 49.5-5t47.5-15ZM791-80l-57 57-138-138q-36 20-75 30.5T440-120q-134 0-227-93t-93-227q0-42 10.5-81t30.5-75L14-743l57-57L791-80ZM379-378Z" />
  </svg>
)
