let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];

  
  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];

// remove ulitmo item da array Alpha - atividade 1

inventarioAlpha.pop()
console.table(inventarioAlpha)

// remove ultimo item da array Beta - atividade 2

inventarioBeta.pop()
console.table(inventarioBeta)

// adicionando 3 novos itens na array Alpha - atividade 3

let novoitem1Alpha = ["Playstation 80", "terra", 8000]
let novoitem2Alpha = ["Camisa do dono do roblox","Terra", 10000]
let novoitem3Alpha = ["Whey do Cariani", "Terra", 4000]

inventarioAlpha.push(novoitem1Alpha)
inventarioAlpha.push(novoitem2Alpha)
inventarioAlpha.push(novoitem3Alpha)

console.table(inventarioAlpha)

// adicionando 2 novos itens na array Beta - atividade 4

let novoitem1Beta = ["Lego marvel","Terra",11000]
let novoitem2Beta = ["Lego batman","Terra",11430]

inventarioBeta.push(novoitem1Beta)
inventarioBeta.push(novoitem2Beta)

console.table(inventarioBeta)

// substituindo itens da array alpha - atividade 5

let itemDestacado = inventarioAlpha[9]
inventarioAlpha.unshift(itemDestacado)

inventarioAlpha.splice(10, 1)

console.table(inventarioAlpha)

// mudando item de lugar da array Beta - atividade 6

let itemPromovido = inventarioBeta[6]
inventarioBeta.unshift(itemPromovido)

inventarioBeta.splice(7, 1)

console.table(inventarioBeta)

// removendo primeiro item da array alpha - atividade 7

inventarioAlpha.shift()

console.table(inventarioAlpha)

// removendo primeiro item da array Beta - atividade 8

inventarioBeta.shift()

console.table(inventarioBeta)

// verificando se tem um item na array Beta - atividade 9

if (inventarioBeta.includes(["Relíquia de Zordon"])) {
    console.log(`O item "Relíquia de Zordon" está presente no inventario Beta`)
} else{
    console.log(`O item "Relíquia de Zordon" não está presente no inventario Beta`)
}


// cria um texto com os 10 primeiros itens da array Beta - atividade 12

let novaString = inventarioBeta.slice(0, 10)

console.log(novaString.join(" ,"))


// cria nova array dos 5 primeiros itens da Beta - atividade 13

let novaarray = []

novaarray = inventarioBeta.slice(0, 5)

console.log(novaarray)

// separando os 10 ultimos elementos da array alpha - atividade 14

let inventarioalphaInvertido = inventarioAlpha.reverse()
console.table(inventarioalphaInvertido.slice(0, 10))

// desenvertendo a lista para voltar a original

inventarioAlpha.reverse()

// substituindo o quinto item da array Alpha - atividade 15

let itemAtualizado = ["Braço do Vecna", "Planeta invertido", 9350]

inventarioAlpha.splice(5, 1)
inventarioAlpha.splice(5, 0,(itemAtualizado))
console.table(inventarioAlpha)

// removendo dois itens no meio da array Beta - atividade 16

let div = inventarioBeta.length / 2
console.log(div)

let itensremovidos = inventarioBeta.splice(11, 2)

console.log(`Os itens removidos foram ${itensremovidos}`)

// concatenando a array Alpha e Beta - atividade 17

let listaCombinada = inventarioAlpha.concat(inventarioBeta)

console.table(listaCombinada)