import React from 'react'
import { IconProps } from './types'

const IconBookmarkBagOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M430-360q13 0 21.5-8.5T460-390v-10h40v10q0 13 8.5 21.5T530-360q13 0 21.5-8.5T560-390v-10q17 0 28.5-11.5T600-440v-160q0-17-11.5-28.5T560-640h-20v-40q0-17-11.5-28.5T500-720h-40q-17 0-28.5 11.5T420-680v40h-20q-17 0-28.5 11.5T360-600v160q0 17 11.5 28.5T400-400v10q0 13 8.5 21.5T430-360Zm30-280v-40h40v40h-40ZM200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
  </svg>
)

export { IconBookmarkBagOutlined as default }