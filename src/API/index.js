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

        const getSinglePlayer = async (id) => {
            try {
                const res = await fetch(`${baseUrl}/players/${id}`);
                const result = await res.json();
                console.log(result);
                return result;
            } catch (error) {
                console.error(error);
            }
        }

        const newPlayerForm = async (createNewPlayer) => {
            try{
                const res = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES/players", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: createNewPlayer.name,
                        breed: createNewPlayer.breed,
                        status: createNewPlayer.status,
                        imageUrl: createNewPlayer.imageUrl,
                        teamId: createNewPlayer.teamId,
                    })
                })
                const result = await res.json();
                console.log(result);
                return result;
            } catch (error) {
                console.error('Registration Error:', error);
            }
        }

export default {getPlayers, getSinglePlayer, newPlayerForm}