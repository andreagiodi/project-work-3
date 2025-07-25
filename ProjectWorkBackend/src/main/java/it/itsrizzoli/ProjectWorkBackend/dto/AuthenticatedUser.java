package it.itsrizzoli.ProjectWorkBackend.dto;

import it.itsrizzoli.ProjectWorkBackend.Impiegato;
import it.itsrizzoli.ProjectWorkBackend.Ospite;

public class AuthenticatedUser {

    private Object user;
    private String userType;

    public AuthenticatedUser() {
    }

    public AuthenticatedUser(Object user, String userType) {
        this.user = user;
        this.userType = userType;
    }

    // Getters e Setters
    public Object getUser() {
        return user;
    }

    public void setUser(Object user) {
        this.user = user;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    // Metodi di utilità
    public boolean isOspite() {
        return "ospite".equals(userType);
    }

    public boolean isImpiegato() {
        return "impiegato".equals(userType);
    }

    public Ospite getAsOspite() {
        if (isOspite()) {
            return (Ospite) user;
        }
        return null;
    }

    public Impiegato getAsImpiegato() {
        if (isImpiegato()) {
            return (Impiegato) user;
        }
        return null;
    }

    public Integer getUserId() {
        if (isOspite()) {
            return ((Ospite) user).getId();
        } else if (isImpiegato()) {
            return ((Impiegato) user).getId();
        }
        return null;
    }

    public String getUserEmail() {
        if (isOspite()) {
            return ((Ospite) user).getEmail();
        } else if (isImpiegato()) {
            return ((Impiegato) user).getEmail();
        }
        return null;
    }
    //modified to get only name
    public String getUserName() {
        if (isOspite()) {
            Ospite ospite = (Ospite) user;
            return ospite.getNome();
        } else if (isImpiegato()) {
            Impiegato impiegato = (Impiegato) user;
            return impiegato.getNome();
        }
        return null;
    }
    //modified to get only LastName
    public String getUserLastName() {
        if (isOspite()) {
            Ospite ospite = (Ospite) user;
            return ospite.getCognome();
        } else if (isImpiegato()) {
            Impiegato impiegato = (Impiegato) user;
            return impiegato.getCognome();
        }
        return null;
    }

    public Integer getUserRoleId() {
        if (isImpiegato()) {
            Impiegato impiegato = (Impiegato) user;
            return impiegato.getIdRuolo();
        }
        return null;
    }

    public boolean isAmministratore() {
        return isImpiegato() && getUserRoleId() != null && getUserRoleId() == 4;
    }

    public boolean isReferente() {// referente
        return isImpiegato() && getUserRoleId() != null && getUserRoleId() == 2;
    }
}
