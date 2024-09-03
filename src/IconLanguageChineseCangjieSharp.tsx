import React from 'react'
import { IconProps } from './types'

const IconLanguageChineseCangjieSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M113-250q-7-10-16-17.5T78-281q39-39 58-90.5T155-478v-76h305v147H197q-8 46-27 88t-57 69Zm89-193h211v-75H202v75ZM98-521q-5-11-12-20t-15-17q61-26 114-64t97-88h44q47 48 103.5 82.5T546-564q-9 9-16.5 19T517-524q-57-29-111.5-62.5T306-665q-43 48-95.5 84T98-521Zm97 271v-140h280v140h-44v-101H239v101h-44Zm18-323v-36h189v36H213Zm-37 109v-34h267v34H176Zm33 199v-38h242v38H209Zm493-69q28 0 54.5-13t48.5-37v-106q-23 3-42.5 7t-36.5 9q-45 14-67.5 35T636-390q0 26 18 41t48 15Zm-23 68q-57 0-90-32.5T556-387q0-52 33-85t106-53q23-6 50.5-11t59.5-9q-2-47-22-68.5T721-635q-26 0-51.5 9.5T604-592l-32-56q33-25 77.5-40.5T740-704q71 0 108 44t37 128v257h-67l-6-45q-28 25-61.5 39.5T679-266Z" />
  </svg>
)

export { IconLanguageChineseCangjieSharp as default }