const options = [
	{
		one: 10000,
		percent: 7
	},
	{
		two: 20000,
		percent: 12
	},
	{
		three: 30000,
		percent: 25
	},
]

let selectedTier = null
let investmentMessage
let investor = null

const tiers = document.querySelector("#tiers")
const userName = document.querySelector("#username")
const message = document.querySelector("#message")
const errorMessage = document.querySelector("#error-message")
const submit = document.querySelector("#submit")
let newTier = null

tiers.addEventListener("change", (e)=> {
	selectedTier = e.target.value
	c = options.filter(a => {
		return a[selectedTier]
	})
	newTier = c
	investmentMessage = `You will invest ${c[0][selectedTier]} for a ROI of ${c[0]["percent"]} % over the period of a week`
	message.innerText = investmentMessage
	errorMessage.innerText = ``
})

userName.addEventListener("input", (e) => {
	investor = e.target.value
})

submit.addEventListener("click", () => {
	console.log(selectedTier)
	console.log(investor)
	if(selectedTier != null && investor != "" && investor != null) {
		investmentMessage = `Thanks for investing ${investor},
		You have successfully invested ${newTier[0][selectedTier]} for a period of one week. You will receive a return of ${newTier[0]["percent"]}%
		`
		message.innerText = investmentMessage
		errorMessage.innerText = ``
	} else {
		errorMessage.innerText = `Please fill in all fields`
	}
})

function init () {
	tiers.selectedIndex = -1
	selectedTier = null
}

init()