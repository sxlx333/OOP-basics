export class Car {
    constructor(brandas, modelis) {
        this.name = brandas;
        this.modelis = modelis;
        this.kuroTalpa = 4;
        this.kuroSanaudos100km = 2;
        this.variklisIjungtas = false;
    }

    ijungtiVarikli() {
        this.variklisIjungtas = true;
        return `${this.name} variklis įjungtas!`;
    }

    isjungtiVarykli() {
        this.variklisIjungtas = false;
        return `${this.name} variklis išjungtas!`;
    }

    vaziuotiAtstumas() {
        if (this.variklisIjungtas === false) {
            return `vaziuoti nepavyks variklis išjungtas`;
        } else {
            const maxAtstumas = (this.kuroTalpa / this.kuroSanaudos100km) * 100;
            return `Važiuoti galima, su ${this.kuroTalpa} L kuro galima nuvažiuoti ${maxAtstumas} km.`;
        }
    }

    uzpiltiKuroLitrais(litrasCount) {
        if (typeof litrasCount !== 'number' || !isFinite(litrasCount) || litrasCount < 0) {
            return 'Užpiltas kuro kiekis litrais turi buti normalus skaicius.';
        }
        this.kuroTalpa += litrasCount;
        return `${this.name} Kuras buvo papildytas ${litrasCount} L`;
    }

    kiekLikoKuroBake() {
        return `${this.name} kuro bake dabar yra ${this.kuroTalpa} L`;
    }

    arGaliPrivaziuotiDegaline(AtstumasIkiDegalines) {
        if (typeof AtstumasIkiDegalines !== 'number' || !isFinite(AtstumasIkiDegalines) || AtstumasIkiDegalines < 0) {
            return 'Atstumas iki degalinės turi buti normalus skaicius.';
        }

        const maxAtstumas = (this.kuroTalpa / this.kuroSanaudos100km) * 100;

        if (AtstumasIkiDegalines > maxAtstumas) {
            return `Degalinė yra per toli, nes atstumas iki degalinės yra ${AtstumasIkiDegalines} km, o ${this.name} gali važiuoti tik ${maxAtstumas} km.`;
        } else {
            const isnaudotasKuras = (this.kuroTalpa * AtstumasIkiDegalines) / maxAtstumas;
            return `${this.name} pasiekė degalinę išnaudojo ${isnaudotasKuras} L. Su esamu ${this.kuroTalpa - isnaudotasKuras} L kuru galima nuvažiuoti dar ${maxAtstumas - AtstumasIkiDegalines} km.`;
        }
    }

}