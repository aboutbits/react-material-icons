import React from 'react'
import { IconProps } from './types'

const IconAnimatedImagesRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m542-461 128-86q18-12 18-33t-18-33l-128-86q-20-14-41-2t-21 36v170q0 24 21 36t41-2ZM228-85q-33 5-59.5-15.5T138-154L85-591q-4-33 16-59t53-30l46-6v326q0 66 47 113t113 47h372q-6 24-24 41.5T664-138L228-85Zm132-195q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h440q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H360Z" />
  </svg>
)

export { IconAnimatedImagesRoundedFilled as default }
