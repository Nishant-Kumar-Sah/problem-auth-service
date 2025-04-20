const {User} = require ('../models')

class UserRepository {
    async createUser(UserData) {
        try {
            const user = await User.create({
                FirstName: UserData.firstname,
                LastName: UserData.lastame ?  UserData.lastname : "",
                UserName : UserData.username,
                Email: UserData.email,
                Password: UserData.password
            })
            return user
        }catch(error) {
            console.log("rep",error)
            throw error
        }
    }
}
module.exports = UserRepository