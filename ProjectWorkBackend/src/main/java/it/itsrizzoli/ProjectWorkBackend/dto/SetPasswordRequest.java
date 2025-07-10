package it.itsrizzoli.ProjectWorkBackend.dto;

public class SetPasswordRequest {
    private String password;

    public SetPasswordRequest() {
    }

    public SetPasswordRequest(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }   
}