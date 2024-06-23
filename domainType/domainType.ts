export function domainType(domains: string[]): string[] {
    const domainLabels: { [key: string]: string } = {
        org: 'organization',
        com: 'commercial',
        net: 'network',
        info: 'information',
    };

    return domains.map((domain) => {
        const extension = domain.split('.').pop() || '';

        return domainLabels[extension] || 'unknown';
    });
}

// console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));
