import React from 'react'
import { IconProps } from './types'

const IconCheckedBagQuestionSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M420-720h120q0-26-17-43t-43-17q-26 0-43 17t-17 43Zm-140 80h-40v280h40v-280ZM80-120v-80h364q5 24 9 40t15 40H80Zm260-520v280h128q-11 24-15 40t-9 40H160v-440h200q0-50 35-85t85-35q50 0 85 35t35 85h200v212q-23-6-39.5-9t-40.5-3v-120h-40v124q-18 3-30 5.5t-30 8.5v-138H340Zm380 200q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Zm0 320q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120Zm0-240q-23 0-41.5 13.5T652-310l32 14q3-12 12.5-21t23.5-9q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14v14h36v-10q0-11 6-19.5t14-16.5q14-12 22-23t8-31q0-29-19-46.5T720-360ZM280-640h60-60Zm0 0h-40 40Zm60 0h280-280Zm280 0h60-60Zm60 0h40-40Z" />
  </svg>
)

export { IconCheckedBagQuestionSharp as default }
