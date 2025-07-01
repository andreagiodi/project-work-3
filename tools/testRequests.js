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


const getAuthProfile = async () => {
    console.log("🔄 Test Get Auth Profile...");
    try {
        const response = await fetch(serverURL + '/auth/profile', {
            credentials: 'include'
        });
        
        const data = await response.json();
        console.log("✅ Auth Profile:", response.status, data);
    } catch (error) {
        console.error("❌ Errore Auth Profile:", error);
    }
}

const getCurrentUser = async () => {
    console.log("🔄 Test Get Current User...");
    try {
        const response = await fetch(serverURL + '/auth/me', {
            credentials: 'include'
        });
        
        const data = await response.json();
        console.log("✅ Current User:", response.status, data);
    } catch (error) {
        console.error("❌ Errore Current User:", error);
    }
}

const checkUserType = async () => {
    console.log("🔄 Test Check User Type...");
    try {
        const response = await fetch(serverURL + '/auth/user-type', {
            credentials: 'include'
        });
        
        const data = await response.json();
        console.log("✅ User Type:", response.status, data);
    } catch (error) {
        console.error("❌ Errore User Type:", error);
    }
}

const checkOspiteAccess = async () => {
    console.log("🔄 Test Check Ospite Access...");
    try {
        const response = await fetch(serverURL + '/auth/check-ospite', {
            credentials: 'include'
        });
        
        const data = await response.text();
        console.log("✅ Ospite Access:", response.status, data);
    } catch (error) {
        console.error("❌ Errore Ospite Access:", error);
    }
}

const checkStaffAccess = async () => {
    console.log("🔄 Test Check Staff Access...");
    try {
        const response = await fetch(serverURL + '/auth/check-staff', {
            credentials: 'include'
        });
        
        const data = await response.text();
        console.log("✅ Staff Access:", response.status, data);
    } catch (error) {
        console.error("❌ Errore Staff Access:", error);
    }
}


loginAndrea()