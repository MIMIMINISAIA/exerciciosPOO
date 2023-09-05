"use strict";
class musica {
    constructor(titulo, artista, duracao) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }
}
class playlist {
    constructor() {
        this.lista = [];
        this.reproduzindo = false;
        this.indiceAtual = 0;
    }
    adicionarMusica(musica) {
        this.lista.push(musica);
    }
    Reproduzir() {
        if (this.lista.length > 0) {
            this.reproduzindo = true;
            return "Reproduzindo " + this.lista[this.indiceAtual].titulo + '-' + this.lista[this.indiceAtual].artista;
        }
        else {
            return "A playlist está vazia";
        }
    }
    pausar() {
        if (this.reproduzindo == true) {
            this.reproduzindo = false;
            return "Musica pausada";
        }
        else {
            return "Nenhuma musica está sendo reproduzida";
        }
    }
    proxima() {
        if (this.lista.length > 0) {
            this.indiceAtual = (this.indiceAtual + 1) % this.lista.length;
            return this.Reproduzir();
        }
        else {
            return "A playlist esta vazia";
        }
    }
}
const musica1 = new musica("vai namorar comigo sim", "Henrique e juliano", 300);
const musica2 = new musica("Enchanted", "Taylor swift", 200);
const musica3 = new musica("ETA", "New jeans", 500);
const minhaPlaylist = new playlist();
minhaPlaylist.adicionarMusica(musica1);
minhaPlaylist.adicionarMusica(musica2);
minhaPlaylist.adicionarMusica(musica3);
console.log(minhaPlaylist.Reproduzir());
console.log(minhaPlaylist.pausar());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
console.log(minhaPlaylist.proxima());
