let form = document.querySelector('form')
let demo = document.querySelector('.demo')

form.onsubmit = async e => {
	e.preventDefault()

	demo.innerHTML = '<span>Loading...</span>'

	let data = new FormData(form)

	let options = {
		method: 'POST',
		body: data
		//mode: 'no-cors'
	}

	// fetch('https://granpharmaceuticals.herokuapp.com/', options)
	// 	.then(res => res.json())
	// 	.then(result => {
	// 		let text = `
	//          <p>${result.name}</p>
	//          <p>${result.email}</p>
	//       `
	// 		demo.innerHTML = text
	// 	})
	// 	.catch(err => console.error(err))

	try {
		let response = await fetch('https://granpharmaceuticals.herokuapp.com/', options)
		let result = await response.json()

		let text = `
		      <p>${result.name}</p>
		      <p>${result.email}</p>
		   `
		demo.innerHTML = text
	} catch (err) {
		demo.innerHTML = `Error: ${err.message}`
	}
}
