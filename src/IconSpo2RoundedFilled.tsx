import React from 'react'
import { IconProps } from './types'

export const IconSpo2RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-160q-17 0-28.5-11.5T440-200v-160q0-17 11.5-28.5T480-400h100q17 0 28.5 11.5T620-360v160q0 17-11.5 28.5T580-160H480Zm20-60h60v-120h-60v120ZM720-80q-17 0-28.5-11.5T680-120v-70q0-17 11.5-28.5T720-230h80v-30h-90q-13 0-21.5-8.5T680-290q0-13 8.5-21.5T710-320h110q17 0 28.5 11.5T860-280v70q0 17-11.5 28.5T820-170h-80v30h90q13 0 21.5 8.5T860-110q0 13-8.5 21.5T830-80H720ZM400-866q8 0 15 2.5t12 7.5q78 69 149.5 145T690-538q9 20-4 39t-36 19H440q-33 0-56.5 23.5T360-400v268q0 17-13 29.5T317-90q-118 0-177.5-94.5T80-408q0-140 93.5-247T373-856q5-5 12-7.5t15-2.5Z" />
  </svg>
)
