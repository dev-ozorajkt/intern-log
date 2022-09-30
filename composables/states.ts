export const useUser = () => useState('user', () => null)
export const useExpand = () => useState<boolean>('expand', () => true)
export const useAvatarModal = () => useState<boolean>('avatarModal', () => false)