
const baseUrl = 'https://fsa-puppy-bowl.herokuapp.com/api/2501-PUPPIES'

const API = ({ setPlayers }) => {
    useEffect(() => {
        const getPlayers = async () => {
            try {
                const res = await fetch(`${baseUrl}/players`);
                const result = await res.json();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        setPlayers();
    }, []);
}

export default {getPlayers}