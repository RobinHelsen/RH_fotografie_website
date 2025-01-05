import { UserLoginInput} from "@types"

const loginUser = (user: UserLoginInput) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
}

const UserService = {
    loginUser,
}

export default UserService
