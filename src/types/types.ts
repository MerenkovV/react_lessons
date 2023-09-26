export type PostType = {
    text: string, 
    likes: number
}

export type PhotosObjectType = {
    large: string | null
    small: string | null
}

export type InfoType = {
    fullName: string,
    aboutMe: string | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    contacts: {
        github: string | null
    },
    photos: {
        large: string | null
    }
}

export type FriendsObjectType = {
    followed: boolean
    id: number
    name: string
    photos: PhotosObjectType
    status: string | null
    uniqueUrlName: string | null
}