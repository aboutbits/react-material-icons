import React from 'react'
import { IconProps } from './types.js'

export const IconPowerSettingsCircleRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-160q100 0 170-70t70-170q0-35-9-66.5T685-606q-12-20-28.5-22.5T626-623q-14 8-19.5 23t5.5 30q14 19 21 42t7 48q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-25 7-47.5t20-41.5q10-15 5-29.5T334-621q-13-8-29.5-6T275-606q-18 27-26.5 59t-8.5 67q0 100 70 170t170 70Zm0-480q-17 0-28.5 11.5T440-680v160q0 17 11.5 28.5T480-480q17 0 28.5-11.5T520-520v-160q0-17-11.5-28.5T480-720Z" />
  </svg>
)