import { Alert } from "react-native";
import { getMsAccessToken } from "../authentication/getAccessToken";
import { ContextService } from "../helpers/services/ContextService";

export async function createSite(name: string) {
    const siteName = ContextService.GenerateSiteName(name);

    try {
        const token = await getMsAccessToken();
        const siteUrl = `${ContextService.GetUrl()}sites/${siteName}`; //https://klot.sharepoint.com/sites/KLOTTEAM1
        const encodedSiteUrl = encodeURIComponent(siteUrl);
        const url = `${ContextService.GetUrl()}_api/SPSiteManager/status?url='${encodedSiteUrl}'`;

        const response = await fetch(
            url,
            {
                method: 'GET'
            }
        )

        const result = await response.json()

        Alert.alert('Response', result)
    } catch (error) {
        console.error(`Something went wrong :: ${error}`);
    }
}   