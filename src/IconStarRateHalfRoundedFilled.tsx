import React from 'react'
import { IconProps } from './types.js'

export const IconStarRateHalfRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-644v236l96 74-36-122 90-64H518l-38-124Zm0 336L332-195q-11 9-24 8.5t-23-7.5q-10-7-15.5-19t-.5-26l57-185-145-103q-12-8-15-21t1-24q4-11 14-19.5t24-8.5h179l58-192q5-14 15.5-21.5T480-821q12 0 22.5 7.5T518-792l58 192h179q14 0 24 8.5t14 19.5q4 11 1 24t-15 21L634-424l57 185q5 14-.5 26T675-194q-10 7-23 7.5t-24-8.5L480-308Z" />
  </svg>
)
