const FotoAlbumService = {
    getAllFotoAlbums: async () => {
        
        const tokenString = localStorage.getItem('loggedInUser'); // Correct key

        if (!tokenString) {
            return { error: 'Unauthorized, log in with a valid account to see fotoalbums.' };
        }

        const tokenObject = JSON.parse(tokenString);
        const token = tokenObject.token;

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/photoalbums`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            return { error: 'Failed to fetch fotoalbums.' };
        }

        const data = await response.json();
        console.log(data);
        return { data };
    }
};

export default FotoAlbumService;