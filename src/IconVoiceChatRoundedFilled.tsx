import React from 'react'
import { IconProps } from './types'

const IconVoiceChatRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M270-520q13 0 21.5-8.5T300-550v-20q0-13-8.5-21.5T270-600q-13 0-21.5 8.5T240-570v20q0 13 8.5 21.5T270-520Zm100 80q13 0 21.5-8.5T400-470v-180q0-13-8.5-21.5T370-680q-13 0-21.5 8.5T340-650v180q0 13 8.5 21.5T370-440Zm110 80q13 0 21.5-8.5T510-390v-340q0-13-8.5-21.5T480-760q-13 0-21.5 8.5T450-730v340q0 13 8.5 21.5T480-360Zm110-80q13 0 21.5-8.5T620-470v-180q0-13-8.5-21.5T590-680q-13 0-21.5 8.5T560-650v180q0 13 8.5 21.5T590-440Zm100-80q13 0 21.5-8.5T720-550v-20q0-13-8.5-21.5T690-600q-13 0-21.5 8.5T660-570v20q0 13 8.5 21.5T690-520ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Z" />
  </svg>
)

export { IconVoiceChatRoundedFilled as default }
