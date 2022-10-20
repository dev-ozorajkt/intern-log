import { Me } from '~/types/me'
const useUserData = () => {
  const userData = useState<Me>('user', () => ({
    id: '',
    name: '',
    avatarPath: '',
    university: '',
    isAdmin: null,
    email: ''
  }))
  
  const setUserData = (user) => {
    userData.value = user
  }
  return {
    userData,
    setUserData
  }
}
export default useUserData