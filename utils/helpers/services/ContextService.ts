export class ContextService {
    public static GetUrl(): string {
        return 'ttps://klot.sharepoint.com/'
    }

    public static GenerateSiteName(name: string): string {
        return name?.replace(' ', '_')
    }

}