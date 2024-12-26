export class Photos {
    private id: number;
    private albumId: number;
    private title: string;
    private url: string;
    private explenation: string;
    private credits: string;

    constructor({
        id,
        albumId,
        title,
        url,
        explenation,
        credits,
    }: {
        id: number;
        albumId: number;
        title: string;
        url: string;
        explenation: string;
        credits: string;
    }) {
        this.id = id;
        this.albumId = albumId;
        this.title = title;
        this.url = url;
        this.explenation = explenation;
        this.credits = credits;
    }

    // GETTERS
    getid() {
        return this.id;
    }

    getalbumId() {
        return this.albumId;
    }

    gettitle() {
        return this.title;
    }

    geturl() {
        return this.url;
    }

    getexplenation() {
        return this.explenation;
    }

    getcredits() {
        return this.credits;
    }

    // SETTERS
    setid(id: number) {
        this.id = id;
    }

    setalbumId(albumId: number) {
        this.albumId = albumId;
    }

    settitle(title: string) {
        this.title = title;
    }

    seturl(url: string) {
        this.url = url;
    }

    setexplenation(explenation: string) {
        this.explenation = explenation;
    }

    setcredits(credits: string) {
        this.credits = credits;
    }
}
