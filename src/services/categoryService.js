import {db} from './firebase';

export const GetCategories = async () => {
    try {
        const data = [];

        const querySnapshot = await db.collection("categories").get();
    
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        
        return data;
    }
    catch(e) {
        console.log("Error fetching categories, detail: ", e);
        return [];
    }
};