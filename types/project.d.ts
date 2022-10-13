export interface Project {    
    id: string        
    title: string
    summary?: string
    featured_image?: string
    date_start: string
    date_end: string
    is_complete: boolean    
    owner: string
    created_at?: string
}