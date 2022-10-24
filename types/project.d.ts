export interface Project {    
    id: number        
    title: string
    summary?: string
    featured_image?: string
    participants: string[]
    date_start: string
    date_end: string
    is_complete: boolean    
    owner: string
    created_at?: string
    note?: string
}