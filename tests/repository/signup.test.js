const {UserRepository}= require ('../../src/repository')
const {User} = require ('../../src/models')
const mockedUserPayload = {
    firstname: "Nishant",
    lastname: "Sah",
    username: "Nishantz901",
    email: "nishant.sa@gmail.com",
    password: "acb"
}
const mockedUser = {
    "FirstName": "Nishant",
    "LastName": "",
    "UserName": "Nishantz902",
    "Email": "nishant.sah1@gmail.com",
    "Password": "acb"
 
}


describe('Tests for User Repository' , () =>{

    test('Successfull Signup of new user to mongoDB',async () => {
        const repository = new UserRepository()
        jest.spyOn(User, 'create').mockImplementation(() => mockedUser)

        const user = await repository.createUser(mockedUserPayload)
        expect(user.FirstName).toBe("Nishant")
    })
})