const baseUrl = 'https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES'

        const getPlayers = async () => {
            try {
                const res = await fetch(`${baseUrl}/players`);
                const result = await res.json();
                console.log(result);
                return result;
            } catch (error) {
                console.error(error);
            }
        }

export default {getPlayers}