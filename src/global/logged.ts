import { atom } from 'jotai'

export const isLoggedIn = atom<boolean>(false)
export const tokenJWT = atom<string>('')