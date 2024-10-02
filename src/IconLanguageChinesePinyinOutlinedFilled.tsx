import React from 'react'
import { IconProps } from './types'

export const IconLanguageChinesePinyinOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-468h56v-82h-56v82ZM101-260l-17-45h39q5 0 9.5-3.5t4.5-8.5v-101l-52 17-11-44 63-19v-90H81v-42h56v-92h44v92h45v42h-46v77l40-13 6 42-46 16v125q0 18-10.5 32.5T142-260h-41Zm139 6-29-32q35-23 57.5-59t23.5-79h-68v-45h72v-81h-54v-41h253v44h-57v83h70l-2 40h-68v165h-44v-165h-58q-2 52-27.5 96.5T240-254Zm193-327-41-10 22-48q11-24 19-49l45 16q-10 23-21.5 45.5T433-581Zm-121-2q-10-23-21-45t-25-42l40-17q14 20 25 42t21 45l-40 17Zm390 249q28 0 54.5-13t48.5-37v-106q-23 3-42.5 7t-36.5 9q-45 14-67.5 35T636-390q0 26 18 41t48 15Zm-23 68q-57 0-90-32.5T556-387q0-52 33-85t106-53q23-6 50.5-11t59.5-9q-2-47-22-68.5T721-635q-26 0-51.5 9.5T604-592l-32-56q33-25 77.5-40.5T740-704q71 0 108 44t37 128v257h-67l-6-45q-28 25-61.5 39.5T679-266Z" />
  </svg>
)
