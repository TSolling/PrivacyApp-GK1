export const appwriteConfig = {
 // API keys for Appwrite has been removed due to public repository
    };

    import { Client, Databases } from 'react-native-appwrite';

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 

const databases = new Databases(client);



export const getAllApps = async () => {
    try {
        const app = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.appsTableId,);
        return app.documents;
    }
    catch (error) {
        console.error(error);
    }
}