export class FirebaseConfig {
    public apiKey: string;
    public authDomain: string;
    public projectId: string;
    public storageBucket: string;
    public messagingSenderId: string;
    public appId: string;
    public measurementId: string;
    constructor(
        apiKey: string,
        authDomain: string,
        projectId: string,
        storageBucket: string,
        messagingSenderId: string,
        appId: string,
        measurementId: string,
    ) {
        this.apiKey = apiKey;
        this.authDomain = authDomain;
        this.projectId = projectId;
        this.storageBucket = storageBucket;
        this.messagingSenderId = messagingSenderId;
        this.appId = appId;
        this.measurementId = measurementId;
    }
}