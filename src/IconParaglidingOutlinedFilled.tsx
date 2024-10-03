import React from 'react'
import { IconProps } from './types.js'

export const IconParaglidingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-280q-33 0-56.5-23.5T400-360q0-33 23.5-56.5T480-440q33 0 56.5 23.5T560-360q0 33-23.5 56.5T480-280ZM360 0v-144q-85-29-122.5-98.5T200-400h80q0 101 51 150.5T480-200q98 0 149-49.5T680-400h80q0 88-37.5 157.5T600-144V0H360ZM200-440l-80-188q-5 3-17 10.5T80-610q-17 0-28.5-11.5T40-650v-140q0-71 129-120.5T480-960q182 0 311 49.5T920-790v140q0 17-11.5 28.5T880-610q-11 0-23-7.5T840-628l-80 188h-80l-60-251q-33-5-68-7t-72-2q-37 0-72 2t-68 7l-60 251h-80Zm35-70 41-171q-28 6-53 13t-48 16l60 142Zm490-1 60-141q-23-9-48-16t-53-13l41 170Z" />
  </svg>
)
