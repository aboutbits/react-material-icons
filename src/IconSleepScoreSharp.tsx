import React from 'react'
import { IconProps } from './types.js'

export const IconSleepScoreSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-880q117 0 198.5 81.5T880-600h-80q0-40-14.5-74.5T746-736l-55 93q-10 16-21.5 35T645-575q-14 15-35 15t-36-14q-15-14-15-35t15-36q14-14 33.5-25t35.5-21l93-55q-27-25-61.5-39.5T600-800v-80ZM483-80q-84 0-157.5-32t-128-86.5Q143-253 111-326.5T79-484q0-146 93-257.5T409-880q-18 99 11 193.5T520-521q71 71 165.5 100T879-410q-26 144-138 237T483-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T463-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T159-484q0 135 94.5 229.5T483-160Zm-20-305Z" />
  </svg>
)
