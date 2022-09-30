let bot = document.querySelector('.bot')
let form = document.forms.center
let students = []
let number = 1

const reloud = (arr) => {
    for(let item of arr) {
        let namber = document.createElement('p')
        let el = document.createElement('div')
        let create = document.createElement('div')
        let delet = document.createElement('div')
        let div = document.createElement('div')
        let name = document.createElement('p')
        let year = document.createElement('p')


        namber.classList.add('namber')
        el.classList.add('el')
        create.classList.add('create')
        delet.classList.add('delet')
        year.classList.add('year')
        div.classList.add('div')

        div.append(create, delet)
        el.append(namber, name, year, div)
        bot.append(el)

        
        namber.innerHTML = number ++
        name.innerHTML = item.name
        year.innerHTML = item.time - item.age

        delet.onclick = () => {
            students = students.filter(e => e.id !== item.id)
            reloud(students)
            console.log(students);
        }

    }
}




form.onsubmit = (e) => {
    e.preventDefault()

    let task = {
        id: Math.random(),
        name: '',
        age: '',
        time: new Date().getFullYear()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })

    students.push(task)

    reloud(students)
    students.pop()
}