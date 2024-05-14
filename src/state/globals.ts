import {create} from 'zustand'

type globalStore = {
    theme: boolean
}

type action ={
    setTheme: (theme:boolean) => void
}
export const useStore = create<globalStore & action>() ((set) => ({
    theme: true,
    setTheme: (theme:boolean) => set ({theme}) 
}))

