import React from 'react'
import { IconProps } from './types.js'

export const IconPanoramaHorizontalRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160q-17 0-28.5-11.5T80-200v-560q0-17 11.5-28.5T120-800q8 0 35.5 9.5T229-770q46 11 108.5 20.5T480-740q80 0 142.5-9.5T731-770q46-11 73.5-20.5T840-800q17 0 28.5 11.5T880-760v560q0 17-11.5 28.5T840-160q-8 0-35.5-9.5T731-190q-46-11-108.5-20.5T480-220q-80 0-142.5 9.5T229-190q-46 11-73.5 20.5T120-160Z" />
  </svg>
)