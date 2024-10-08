import React from 'react'
import { IconProps } from './types'

const IconAddLocationAltRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 373q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q40 0 60 21.5t20 53.5v5q0 33 23.5 56.5T640-720h40v40q0 17 6 31.5t17 25.5q9 9 20 14.5t23 7.5q30 5 42 22.5t12 43.5q0 29-12.5 64.5T758-401q-17 34-34 61.5T697-299q-43 57-88.5 101.5T533-127q-11 10-25 15t-28 5Zm240-653h-80q-17 0-28.5-11.5T600-800q0-17 11.5-28.5T640-840h80v-80q0-17 11.5-28.5T760-960q17 0 28.5 11.5T800-920v80h80q17 0 28.5 11.5T920-800q0 17-11.5 28.5T880-760h-80v80q0 17-11.5 28.5T760-640q-17 0-28.5-11.5T720-680v-80Z" />
  </svg>
)

export { IconAddLocationAltRoundedFilled as default }
