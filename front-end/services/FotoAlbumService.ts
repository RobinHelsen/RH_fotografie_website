const getAllFotoAlbum = async () => {
        
        const tokenString = localStorage.getItem('loggedInUser');
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
};

const getAlbumById = async (albumId: Number) => {

    console.log("albumId: ", albumId);
    const tokenString = localStorage.getItem('loggedInUser');

    if (!tokenString) {
        return { error: 'Unauthorized, log in with a valid account to see fotoalbums.' };
    }

    const tokenObject = JSON.parse(tokenString);
    const token = tokenObject.token;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/photoalbums/${albumId}`, {
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
};

export default { getAllFotoAlbum, getAlbumById };

