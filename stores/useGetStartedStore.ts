import {create} from "zustand"
import {User} from "@/app/types"

interface UserState {
    users:User[];
    addUsers:(id:User)=>void
}

const UserAdd=create<UserState>((set)=>({
    users:[],
    addUsers:(user) => {
        return set((state) => ({
            users:[...state.users,user]
        }))
    }
}))

export default UserAdd