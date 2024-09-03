import React from 'react'
import { IconProps } from './types'

const IconMacroOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M794-265 665-394q29-17 61.5-28t65.5-14q9-1 17.5 2.5T824-424q6 6 9.5 14.5T836-392q-3 34-14 66t-28 61ZM686-145q-44 31-96.5 48T480-80q0-57 17-109.5t48-96.5l-74-74q-36-3-65-24t-42-54q-5 0-9 .5t-9 .5q-53 0-89.5-36.5T220-563q0-11 1.5-21t5.5-20L83-748q-12-12-12-28.5T83-805q12-12 28.5-12t28.5 12l680 680q12 12 11.5 28T819-69q-12 12-28.5 12T762-69l-76-76ZM480-920q38 0 70 21.5t46 56.5q5 0 9-.5t9-.5q52 0 88.5 37t36.5 89q0 21-6.5 40.5T712-640q13 17 20 36.5t7 40.5q0 50-33.5 86.5T622-437L513-546q29-11 48-36.5t19-57.5q0-42-29-71t-71-29q-32 0-57.5 19T386-673L255-804q21-22 50-31t59-7q14-35 46-56.5t70-21.5Zm0 840q0-140-84.5-233.5T177-430q-11-2-20 1t-16 10q-7 7-10 15.5t-1 19.5q25 134 116.5 219T480-80Z" />
  </svg>
)

export { IconMacroOffRoundedFilled as default }
