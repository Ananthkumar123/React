import { Client, Account, ID } from "appwrite";
import config from '../config/config';

export class AuthService {  // creating a obj for the class we can use obj.methods 

    client = new Client();
    account;
    constructor() { 
        this.client
        .setEndpoint(config.appWriteUrl).setProject(config.appWriteProjectId)
        this.account = new Account(this.client)
        console.log( import.meta.env.VITE_APPWRITE_PROJECT_ID)
            
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login  // once useraccount signin then automaticalls calls login 
            } else {
                return userAccount  // r
            }
        } catch (error) {
            throw error;
        }

    }
    async login({ email, password }) {
        try {
           return await this.account.createEmailSession(email, password) // 
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {   // omce u loged into the user details

        try {
            return await this.account.get() // get is appwrite function to get the user details
        } catch (error) {
            console.log("appwrite service::getcurrent user", error);

        }
        return null;  // if user details not found 
    }

    async logOut() {

        try {
            await this.account.deleteSessions()  //it s a method 
        } catch (error) {
            console.log("appwrite logout", error);

        }
    }
}

 export const authService = new AuthService();

export default authService
