import * as helmet from 'helmet';
class HelmetCustomConfig {
    constructor(helmet) {
        this.helmet = helmet
        const headers = ['hsts'];
        headers.forEach(head => {
            head in this.helmet && head in this ? this.helmet[head](this[head]) : console.error(`Bad property ${head}`);
        });
    }
    get hsts() {
        return {
            maxAge: 31536000,
            includeSubDomains: true,
            preload: false
        }
    }
    helmet() {
        return this.helmet
    }
}
const helmetCustomConfig = new HelmetCustomConfig(helmet);
export const helmetCustomer = helmetCustomConfig.helmet;