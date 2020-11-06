import {db} from './firebase';

export const GetSubCategories = async (id) => {
    try {
        const data = [];

        const querySnapshot = await db.collection("categories").doc(id).collection('subcategories').get();

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