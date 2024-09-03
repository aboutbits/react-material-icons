import React from 'react'
import { IconProps } from './types'

const IconLunchDiningRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-80q0-17 11.5-28.5T120-320h720q17 0 28.5 11.5T880-280v80q0 33-23.5 56.5T800-120H160Zm320-300q-36 0-57 20t-77 20q-56 0-76-20t-56-20q-28 0-45.5 13.5T121-385q-16 5-28.5-6.5T80-420q0-17 11.5-29.5T119-470q17-9 37-19.5t58-10.5q56 0 76 20t56 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 56-20t76-20q36 0 57 10t38 19q16 8 27.5 21t11.5 30q0 17-12 28.5t-28 6.5q-29-8-45.5-21.5T750-420q-36 0-58 20t-78 20q-56 0-77-20t-57-20Zm0-420q74 0 145.5 13.5t128 42q56.5 28.5 91.5 74T880-600q0 17-11.5 28.5T840-560H120q-17 0-28.5-11.5T80-600q0-65 35-110.5t91.5-74q56.5-28.5 128-42T480-840Z" />
  </svg>
)

export { IconLunchDiningRoundedFilled as default }
