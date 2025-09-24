const getSiteName = (name: any) => {
    return name?.replace(' ', '-');
}

export function createSite(name: string) {
    const siteName = getSiteName(name);
    console.log({ siteName });

}   