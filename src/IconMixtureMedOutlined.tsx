import React from 'react'
import { IconProps } from './types'

const IconMixtureMedOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m320-60-80-60v-160h-40q-33 0-56.5-23.5T120-360v-300q-17 0-28.5-11.5T80-700q0-17 11.5-28.5T120-740h120v-60h-20q-17 0-28.5-11.5T180-840q0-17 11.5-28.5T220-880h120q17 0 28.5 11.5T380-840q0 17-11.5 28.5T340-800h-20v60h120q17 0 28.5 11.5T480-700q0 17-11.5 28.5T440-660v300q0 33-23.5 56.5T360-280h-40v220Zm360-20q-66 0-113-47t-47-113v-320q0-66 47-113t113-47q66 0 113 47t47 113v320q0 66-47 113T680-80ZM200-360h160v-60h-70q-12 0-21-9t-9-21q0-12 9-21t21-9h70v-60h-70q-12 0-21-9t-9-21q0-12 9-21t21-9h70v-60H200v300Zm480-280q-33 0-56.5 23.5T600-560h160q0-33-23.5-56.5T680-640Zm-80 320h160v-160H600v160Zm80 160q33 0 56.5-23.5T760-240H600q0 33 23.5 56.5T680-160Zm0-400Zm0 320Z" />
  </svg>
)

export { IconMixtureMedOutlined as default }
