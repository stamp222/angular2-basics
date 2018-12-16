export class UsersService {
    private registeredUsers = ["Jacek", "Magda","Krzysiek"];

    getUsers() {
        return this.registeredUsers;
    }
}