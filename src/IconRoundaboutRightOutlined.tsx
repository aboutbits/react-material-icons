import React from 'react'
import { IconProps } from './types'

const IconRoundaboutRightOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-120v-243q-88-14-144-81.5T80-600q0-100 70-170t170-70q88 0 155.5 56T557-640h170l-63-64 56-56 160 160-160 160-57-56 64-64H556q-29 0-51-19t-27-48q-10-58-54.5-95.5T320-760q-66 0-113 47t-47 113q0 59 37.5 103.5T293-442q29 5 48 27t19 51v244h-80Z" />
  </svg>
)

export { IconRoundaboutRightOutlined as default }
