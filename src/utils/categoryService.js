import { db } from './firebase';
import { isFalsy } from './oisee';

export const GetAllEntries = async (id) => {
    try {
        
        const data = [];
        if (isFalsy(id)) {
            const querySnapshot = await db.collection("categories").get();
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
        }
        else {

        }

        return data;
    }
    catch (e) {
        console.log("Error fetching categories, detail: ", e);
        return [];
    }
};