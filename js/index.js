document.addEventListener("DOMContentLoaded", () => {
    
    function getMonsters() {
        fetch('http://localhost:3000/monsters')
        .then(resp => resp.json())
        .then(monsters => monsters.map(monster => displayMonsters(monster)))
    }
    getMonsters()

    function displayMonsters(monster) {
        const monsterContainer = document.getElementById('monster-container')
        let h4 = document.createElement('h4')
        let h2 = document.createElement('h2')
        let p = document.createElement('p')
        h4.textContent = monster.name
        h2.textContent = monster.age
        p.textContent = monster.description
        monsterContainer.append(h4, h2, p)
    }

    displayMonsters()

    const form = document.querySelector('#monster-form')

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        getMonsters(e.target[0].value)
        form.reset()
        const monsterContainer = document.getElementById('monster-container')
        monsterContainer.textContent = ""
    })
    function newMonster() {
    fetch('http://localhost:3000/monsters', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: monsterName,
            age: monsterAge,
            description: monsterDescription
        })
        .then(resp => resp.json())
        .then(newMonster => {
            const monsterContainer = document.getElementById('monster-container')
            displayMonsters(newMonster)
        
        })
    })
}
    newMonster()
})