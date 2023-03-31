import { faker } from '@faker-js/faker'
import { ss } from '@/utils/storage'
const LOCAL_NAME = 'userStorage'

faker.locale = 'zh_CN'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://i.328888.xyz/2023/03/27/in2Z1x.jpeg',
      name: faker.name.fullName().replace(/ /g, ''),
      description: '',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
