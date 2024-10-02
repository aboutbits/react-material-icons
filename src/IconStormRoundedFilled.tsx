import React from 'react'
import { IconProps } from './types'

export const IconStormRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M768-80q-15 0-23.5-13t-3.5-29q17-53 23-107t2-109q-39 83-116.5 130.5T480-160q-84 0-152-39.5T212-305q-48-66-74-151.5T112-634q0-52 5.5-102.5T137-837q5-19 20-31t35-12q15 0 23.5 13t3.5 29q-16 53-22.5 107T194-622q39-83 116.5-130.5T480-800q84 0 152 39.5T748-655q48 66 74 151.5T848-326q0 52-5.5 102.5T823-123q-5 19-20 31t-35 12ZM480-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z" />
  </svg>
)
