import React from 'react'
import { IconProps } from './types'

const IconSpeakerNotesOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-400q-17 0-28.5-11.5T240-440q0-17 11.5-28.5T280-480q17 0 28.5 11.5T320-440q0 17-11.5 28.5T280-400Zm548 154-74-74h46v-480H274l-80-80h686v634h-52ZM554-520l-80-80h246v80H554ZM820-28 606-240H240L80-80v-688l-52-52 56-56L876-84l-56 56ZM514-560Zm-234 40q-17 0-28.5-11.5T240-560q0-17 11.5-28.5T280-600q17 0 28.5 11.5T320-560q0 17-11.5 28.5T280-520Zm154-120-34-34v-46h320v80H434Zm-90 136ZM160-688v413l46-45h322L160-688Z" />
  </svg>
)

export { IconSpeakerNotesOffSharp as default }
