import React from 'react'
import { IconProps } from './types'

export const IconLassoSelectRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M479-82q-35 0-69.5-5.5T343-106q-12-4-19.5-14t-7.5-24q0-17 11.5-28.5T356-184l14 2q27 9 53.5 14.5T479-162q17 0 28.5 11.5T519-122q0 17-11.5 28.5T479-82Zm160-40q-17 0-28.5-11.5T599-162v-160q0-17 11.5-28.5T639-362h160q17 0 28.5 11.5T839-322q0 17-11.5 28.5T799-282h-64l84 84q11 11 11.5 27.5T819-142q-11 11-28 11t-28-11l-84-84v64q0 17-11.5 28.5T639-122Zm-414-66q-8 0-15.5-3.5T197-200q-33-32-57-70t-39-81q-2-4-2-14 0-17 11.5-28.5T139-405q14 0 24 8t14 20q12 35 31 65t45 56q5 5 8.5 12.5T265-228q0 17-11.5 28.5T225-188Zm614-254q-17 0-28.5-11.5T799-482q0-29-5.5-55.5T779-591q-2-4-2-14 0-17 11.5-28.5T817-645q14 0 24 7.5t14 19.5q13 32 18.5 66.5T879-482q0 17-11.5 28.5T839-442Zm-718-38q-17 0-28.5-11.5T81-520v-7q6-45 21-88t39-81q5-8 14-13.5t20-5.5q17 0 28.5 11.5T215-675q0 6-2 12t-5 11q-20 31-31 65.5T161-516q-2 15-13 25.5T121-480Zm612-216q-8 0-15.5-3.5T705-708q-26-26-56-45t-65-31q-12-4-20-14t-8-24q0-17 11.5-28.5T596-862l14 2q43 15 81 39t70 57q5 5 8.5 12.5T773-736q0 17-11.5 28.5T733-696Zm-447-50q-17 0-28.5-11.5T246-786q0-11 5.5-20t13.5-14q38-24 81-39t88-21h7q17 0 28.5 11.5T481-840q0 16-10.5 27T445-800q-36 5-70.5 16T309-753q-5 3-11 5t-12 2Z" />
  </svg>
)
