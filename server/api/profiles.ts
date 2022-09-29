import { serverSupabaseClient } from '#supabase/server'
import { Profile } from '~/types/profile'

export default eventHandler(async (event) => {    
    const client = serverSupabaseClient(event)    
    const { data } = await client.from<Profile>('profiles').select()
    return data
})