
import { Client, Databases, Storage, Query, ID } from "appwrite";
import config from "../config/config";

export class Service {

    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId)
                         
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        console.log("Appwrite endpoint set to:", config.appWriteUrl);
    }
    

    async createPost({ title, slug, content, featuredImage, status, userId, }) {
        try {
            return await this.databases.createDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug, {
                title,
                content, featuredImage, status, userId
            }
            )
        } catch (error) {
            console.log('appwrite sercvie');

        }
    }
    async updatePost(slug,{title, content, featuredImage, status,  }){

        try {
            return this.databases.updateDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status

                }
            )
        } catch (error) {
            console.log('appwrite service : updatepost',error);
            
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug
            )
           return true
        } catch (error) {
            console.log('appwrite ,deletepost');
            return false
        }
    }
    //want one document 

    async getPost({slug}){

        try {
            return await this.databases.getDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                slug
            )
        } catch (error) {
              console.log('appwrite , getpost,error');
            return false
        }
    }
    async getsPosts(queries= [Query.equal("status","active")]){

        try {
            await this.databases.listDocuments(
                config.appWriteDataBaseId,
                config.appWriteCollectionId,
                queries,
                
            )
        } catch (error) {
            console.log("getposts ", error);
            return false
            
        }
    }
    // file upload service 

    async uploadFile(file){

        try {
            return await this.bucket.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('upload file ::' , error);
            return false
            
        }
    }
    async deleteFile(fileId){

        try {
            await this.bucket.deleteFile(
                config.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("",error);
            
            
        }
    }
    getFilePreview(fileId){  // 
        return this.bucket.getFilePreview(
            config.appWriteBucketId,
            fileId
        )
    }

}
const appWriteService = new Service()
export default appWriteService