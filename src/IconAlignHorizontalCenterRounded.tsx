import React from 'react'
import { IconProps } from './types.js'

export const IconAlignHorizontalCenterRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120v-160H300q-25 0-42.5-17.5T240-340q0-25 17.5-42.5T300-400h140v-160H180q-25 0-42.5-17.5T120-620q0-25 17.5-42.5T180-680h260v-160q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v160h260q25 0 42.5 17.5T840-620q0 25-17.5 42.5T780-560H520v160h140q25 0 42.5 17.5T720-340q0 25-17.5 42.5T660-280H520v160q0 17-11.5 28.5T480-80q-17 0-28.5-11.5T440-120Z" />
  </svg>
)
