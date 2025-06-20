import { $host } from '../index';


export const Create_pet = async (name, age, health, hungry, mood, status) => {
    try
    {
        const { data } = await $host.post('/api/mypet/create_pet', {name, age, health, hungry, mood, status});

        console.log(data);

        if (data?.error)
            throw new Error(data.error);

        return data;
    }catch (error)
    {
        alert(error);

        return {
            error: error.message
        };
    }
};
