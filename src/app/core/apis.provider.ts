export class APIS {
    static PORTALNOTICIA = 'portalnoticia';
    static VERSAO = 'v1';

    static getUrl(): string {
        return `${this.VERSAO}`;
    }
}