import React from 'react'
import { IconProps } from './types'

const IconBallotOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-560h200v-80H480v80Zm0 240h200v-80H480v80ZM360-520q33 0 56.5-23.5T440-600q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600q0 33 23.5 56.5T360-520Zm0 240q33 0 56.5-23.5T440-360q0-33-23.5-56.5T360-440q-33 0-56.5 23.5T280-360q0 33 23.5 56.5T360-280ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)

export { IconBallotOutlinedFilled as default }
