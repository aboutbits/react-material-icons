import React from 'react'
import { IconProps } from './types.js'

export const IconPlannerBannerAdPtRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm210-220-46-60q-6-8-16-8t-16 8l-67 88q-8 10-2.5 21t18.5 11h318q13 0 18.5-11t-2.5-21l-97-127q-6-8-16-8t-16 8l-76 99Z" />
  </svg>
)