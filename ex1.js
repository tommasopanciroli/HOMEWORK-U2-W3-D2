const key = 'memory'

const form = document.querySelector('form')

const saveButton = document.getElementById('save')
const removeButton = document.getElementById('remove')

const text = document.getElementById('inputName').value

const p = document.querySelector('p')

let memoryArr = []

if (localStorage.getItem(key)) {
  memoryArr = JSON.parse(localStorage.getItem(key))
} else {
  memoryArr = []
}

if (memoryArr.length > 0) {
  let name = memoryArr.length[-1]
  p.innerText = `${memoryArr[name]}`
}

function buttonSave() {
  if (text.length > 1) {
    memoryArr.push(text)
    localStorage.setItem(key, JSON.stringify(memoryArr))
    let name = memoryArr.length[-1]
    p.innerHTML = `${memoryArr[name]}`
    form.reset()
  }
}

form.addEventListener('submit', function (e) {
  buttonSave()
  e.preventDefault()
})
