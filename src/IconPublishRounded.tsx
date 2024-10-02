import React from 'react'
import { IconProps } from './types'

export const IconPublishRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m440-486-75 75q-12 12-28.5 11.5T308-412q-11-12-11.5-28t11.5-28l144-144q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l144 144q12 12 11.5 28T652-412q-12 12-28.5 12.5T595-411l-75-75v286q0 17-11.5 28.5T480-160q-17 0-28.5-11.5T440-200v-286ZM160-640v-80q0-33 23.5-56.5T240-800h480q33 0 56.5 23.5T800-720v80q0 17-11.5 28.5T760-600q-17 0-28.5-11.5T720-640v-80H240v80q0 17-11.5 28.5T200-600q-17 0-28.5-11.5T160-640Z" />
  </svg>
)
