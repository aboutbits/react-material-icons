import React from 'react'
import { IconProps } from './types'

const IconElderlyRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M540-740q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Zm160 350q-8 0-14-6t-6-14v-19q-54-23-84-51.5T543-557q-11 28-17.5 68.5T521-412l72 102q4 5 5.5 11t1.5 12v207q0 17-11.5 28.5T560-40q-17 0-28.5-11.5T520-80v-160l-71-102-8 130q0 4-8 22L344-72q-10 14-26 16t-30-8q-14-10-16-26t8-30l80-107v-213q0-31 5-67.5t15-67.5l-60 33v102q0 17-11.5 28.5T280-400q-17 0-28.5-11.5T240-440v-125q0-11 5-20.5t15-14.5l156-88q25-14 43.5-21.5T494-717q25 0 45.5 21.5T587-628q32 54 58 81t56 41q11-8 19-11t19-3q25 0 43 18t18 42v400q0 8-6 14t-14 6q-8 0-14-6t-6-14v-400q0-8-6-14t-14-6q-8 0-14 6t-6 14v50q0 8-6 14t-14 6Z" />
  </svg>
)

export { IconElderlyRoundedFilled as default }
