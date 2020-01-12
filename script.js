let form = document.querySelector('form')
let demo = document.querySelector('.demo')

form.onsubmit = e => {
	e.preventDefault()

	let data = new FormData(form)

	let options = {
		method: 'POST',
		body: data
		//mode: 'no-cors'
	}

	fetch('https://granpharmaceuticals.herokuapp.com/', options)
		.then(res => res.json())
		.then(result => {
			let text = `
            <p>${result.name}</p>
            <p>${result.email}</p>
         `
			demo.innerHTML = text
		})
		.catch(err => console.error(err))
}
