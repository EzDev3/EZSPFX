import * as AuthSession from "expo-auth-session";

const tenantId = 'df913032-f2de-497c-ab5a-3d28fece95a6'; // or your specific tenant
const clientId = 'f4b8251e-28f8-4e6f-8842-0893b8118924';

const redirectUri = AuthSession.makeRedirectUri();

const discovery = {
    authorizationEndpoint: `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize`,
    tokenEndpoint: `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
};

export async function getMsAccessToken() {
    // const request = new AuthSession.AuthRequest({
    //     clientId,
    //     scopes: ["User.Read", "Sites.Read.All"],
    //     redirectUri,
    //     responseType: "token",
    // });

    // const result = await request.promptAsync(discovery);

    const tenantId = "df913032-f2de-497c-ab5a-3d28fece95a6";
    const clientId = "f4b8251e-28f8-4e6f-8842-0893b8118924";
    const clientSecret = '';

    const url = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

    const searchBody = new URLSearchParams();

    searchBody.append("client_id", clientId);
    searchBody.append("scope", "https://graph.microsoft.com/.default");
    searchBody.append("grant_type", "client_credentials");

    try {
        const result = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: searchBody.toString()
        });

        const data = await result.json();

        return data?.access_token;
    } catch (error) {
        console.log(`Something went wrong when fetching Token :: ${error}`);
    }


    debugger
}