import React from 'react'
import { IconProps } from './types'

const IconMotionPhotosAutoRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M416-422h128l24 65q3 8 9.5 12.5T592-340q14 0 21.5-11t2.5-24L514-643q-3-8-9.5-12.5T490-660h-20q-8 0-14.5 4.5T446-643L345-374q-5 12 2 23t21 11q8 0 14.5-4.5T392-357l24-65Zm16-46 46-132h4l46 132h-96Zm48 388q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-32 5-64t15-63q5-16 20.5-21.5T150-626q15 8 21.5 23.5T173-570q-6 22-9.5 44.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-134-93-227t-227-93q-24 0-47.5 3.5T386-786q-17 5-32-1t-22-21q-7-15-.5-30.5T354-859q30-11 62-16t64-5q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM220-680q-25 0-42.5-17.5T160-740q0-25 17.5-42.5T220-800q25 0 42.5 17.5T280-740q0 25-17.5 42.5T220-680Zm260 200Z" />
  </svg>
)

export { IconMotionPhotosAutoRounded as default }
