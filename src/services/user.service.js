class UserService {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
    }

    async signup(UserData) {
        try{
            console.log("User data :" ,UserData )
            const User = await this.UserRepository.createUser(UserData);
            
            console.log("User created: " , User)
            return User;
        }catch(error){
            console.error("error",error)
            throw error

        }

    }
}

module.exports = UserService