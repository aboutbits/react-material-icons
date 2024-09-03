import React from 'react'
import { IconProps } from './types'

const IconFindInPageRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h323q18 0 34 7.5t27 21.5l157 189q9 11 14 24t5 27v363q0 20-18.5 27.5T749-227L618-360q11-17 16.5-37t5.5-43q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47q23 0 43-5.5t37-16.5l155 154q19 19 9 43.5T687-80H240Zm240-280q-33 0-56.5-23.5T400-440q0-33 23.5-56.5T480-520q33 0 56.5 23.5T560-440q0 33-23.5 56.5T480-360Z" />
  </svg>
)

export { IconFindInPageRoundedFilled as default }
