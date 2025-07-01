const serverURL = "http://localhost:8080"

const login = () => {
    fetch(serverURL+'/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: 'giulia.neri@example.com',
            password: 'guestpass1'
        }),
        credentials: 'include'
    });
}

const loginAndrea = async () => {
    console.log("🔄 Test Login Ospite...");
    try {
        const response = await fetch(serverURL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'andrea.giodice@itsrizzoli.it',
                password: 'rizzolipsw',
            }),
            credentials: 'include'
        });
        
        const data = await response.json();
        console.log("✅ Login Ospite:", response.status, data);
    } catch (error) {
        console.error("❌ Errore Login Ospite:", error);
    }
}

const registerOspite = async () => {
    console.log("🔄 Test Registrazione Ospite...");
    try {
        const response = await fetch(serverURL + '/register/ospite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: 'Andrea',
                cognome: 'Giodice',
                email: 'andrea.giodice@itsrizzoli.it',
                password: 'rizzolipsw',
                telefono: '1234567890',
                codiceFiscale: 'RSSMRA80A01H501U',
                azienda: 'Test SpA',
                idTipoOspite: 1
            }),
            credentials: 'include'
        });
        
        const data = await response.json();
        console.log("✅ Registrazione Ospite:", response.status, data);
    } catch (error) {
        console.error("❌ Errore Registrazione Ospite:", error);
    }
}

const registerImpiegato = async () => {
    console.log("🔄 Test Registrazione Impiegato...");
    try {
        const response = await fetch(serverURL + '/register/staff', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: 'Walter',
                cognome: 'Verdi',
                email: 'walter.verdi@test.com',
                password: 'rizzolipsw',
                idRuolo: 2,
                isEsterno: false
            }),
            credentials: 'include'
        });
        
        const data = await response.json();
        console.log("✅ Registrazione Impiegato:", response.status, data);
    } catch (error) {
        console.error("❌ Errore Registrazione Impiegato:", error);
    }
}

const validateEmail = async (email) => {
    console.log(`🔄 Test Validazione Email: ${email}...`);
    try {
        const response = await fetch(serverURL + '/register/validate-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email
            }),
            credentials: 'include'
        });
        
        const data = await response.text();
        console.log("✅ Validazione Email:", response.status, data);
    } catch (error) {
        console.error("❌ Errore Validazione Email:", error);
    }
}

const profile = () => {

    fetch(serverURL+'/ospite/profile', {
        credentials: 'include'
    })
}


loginAndrea()