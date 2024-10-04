import React from 'react'
import { IconProps } from './types.js'

export const IconMacroOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M794-265 665-394q29-17 61.5-28t65.5-14q9-1 17.5 2.5T824-424q6 6 9.5 14.5T836-392q-3 34-14 66t-28 61Zm-166 62-25-25q-8 12-14 24t-11 26q14-5 26-11t24-14Zm58 58q-44 31-96.5 48T480-80q0-57 17-109.5t48-96.5l-74-74q-36-3-65-24t-42-54q-5 0-9 .5t-9 .5q-53 0-89.5-36.5T220-563q0-11 1.5-21t5.5-20L83-748q-12-12-12-28.5T83-805q12-12 28.5-12t28.5 12l680 680q12 12 11.5 28T819-69q-12 12-28.5 12T762-69l-76-76ZM480-920q38 0 70 21.5t46 56.5q5 0 9-.5t9-.5q52 0 88.5 37t36.5 89q0 21-6.5 40.5T712-640q13 17 20 36.5t7 40.5q0 50-33.5 86.5T622-437L450-609l-79-79q6-13 14-24t19-20l-32-23q-5-4-11.5-6t-14.5-2q-10 0-19 4t-15 12l-57-57q21-22 50-31t59-7q14-35 46-56.5t70-21.5Zm134 403q19 0 32.5-13.5T660-563q0-14-7.5-24.5T633-604l-35-17q-2 11-6 21.5t-9 19.5q-5 9-12 17t-15 15l32 23q5 4 11.5 6t14.5 2Zm-16-142 35-17q12-6 19-17t7-24q0-19-13-32.5T614-763q-8 0-14 2t-12 6l-33 23q8 7 15.5 15t12.5 17q5 9 9 19.5t6 21.5Zm-159-93q10-4 20-6t21-2q11 0 21 2t20 6l5-44q2-18-12.5-31T480-840q-19 0-33.5 13T434-796l5 44Zm41 152q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm103 20Zm0-120Zm-103-60Zm0 680q0-140-84.5-233.5T177-430q-11-2-20 1t-16 10q-7 7-10 15.5t-1 19.5q25 134 116.5 219T480-80Zm-98-98q-57-21-100-64t-64-100q57 21 100 64t64 100Zm196 0Zm-196 0Z" />
  </svg>
)
