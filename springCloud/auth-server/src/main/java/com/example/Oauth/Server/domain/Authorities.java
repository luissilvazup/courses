package com.example.Oauth.Server.domain;

public enum Authorities {
    ROLE_USER,
    ROLA_ADMIN;

    public static String[] names(){
        String[] names = new String[values().length];

        for(int index = 0; index < values().length; index++){
            names[index] = values()[index].name();
        }

        return names;
    }
}
