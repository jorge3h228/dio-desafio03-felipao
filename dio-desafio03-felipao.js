class personagem {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;

    }
    escrever() {
        console.log(`Seu nome será ${this.name} você pertence a classe ${this.type} e tem ${this.age} anos de idade`);
    }
    encounter() {
        console.log(` ${this.name} você encontrou um monstro!`);
    }
    atacck() {
        let ataqueMonge = "Artes Marciais"
        let ataqueMago = "Magia"
        let ataqueGuerreiro = "Espada"
        let ataqueNinja = "Shurikens"

        if (this.type === "Monge") {
            console.log(`Você atacou usando ${ataqueMonge}`);
        } else if (this.type === "Mago") {
            console.log(`Você atacou usando ${ataqueMago}`);
        } else if (this.type === "Guerreiro") {
            console.log(`Você atacou usando ${ataqueGuerreiro}`);
        } else if (this.type === "Ninja") {
            console.log(`Você atacou usando ${ataqueNinja}`);
        } else {
            console.log("Classe não encontrada");
        }
    }
}
let personagem1 = new personagem("Felipão", 22, "Mago");
personagem1.escrever();
personagem1.encounter();
personagem1.atacck();
console.log("-------------------------------------------------");
let personagem2 = new personagem("Jorge", 22, "Guerreiro");
personagem2.escrever();
personagem2.encounter();
personagem2.atacck();
console.log("-------------------------------------------------");
let personagem3 = new personagem("Lucas", 22, "Ninja");
personagem3.escrever();
personagem3.encounter();
personagem3.atacck();
console.log("-------------------------------------------------");
let personagem4 = new personagem("Leandro", 22, "Monge");
personagem4.escrever();
personagem4.encounter();
personagem4.atacck();