import React from 'react'
import { IconProps } from './types'

const IconStairsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240h177v-133h103v-133h103v-134h97v-80H543v133H440v133H337v134h-97v80ZM120-120v-720h720v720H120Z" />
  </svg>
)

export { IconStairsSharpFilled as default }
