import React from 'react'
import { IconProps } from './types'

export const IconFastfoodRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-600q46 0 93.5 11.5t88 35.5q40.5 24 69.5 60t39 85q4 19-8 33.5T591-360H89q-19 0-31-14.5T50-408q10-49 39.5-85t70-60q40.5-24 87.5-35.5t93-11.5ZM80-200q-17 0-28.5-11.5T40-240q0-17 11.5-28.5T80-280h520q17 0 28.5 11.5T640-240q0 17-11.5 28.5T600-200H80Zm0 160q-17 0-28.5-11.5T40-80q0-17 11.5-28.5T80-120h520q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40H80Zm732 0h-52q-17 0-28.5-11.5T720-80v-280q0-108-70.5-188.5T475-661q-11-3-18-11.5t-9-19.5l-3-23q-2-18 10-31.5t30-13.5h155v-120q0-17 11.5-28.5T680-920q17 0 28.5 11.5T720-880v120h156q18 0 30 13t10 31L852-76q-2 15-13 25.5T812-40Z" />
  </svg>
)
