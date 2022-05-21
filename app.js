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
let investor

const tiers = document.querySelector("#tiers")
const userName = document.querySelector("#username")
const message = document.querySelector("#message")
const submit = document.querySelector("#submit")

tiers.addEventListener("change", (e)=> {
	selectedTier = e.target.value
	c = options.filter(a => {
		return a[selectedTier]
	})
	investmentMessage = `You will invest ${c[0][selectedTier]} for a ROI of ${c[0]["percent"]} over the period of a week%`
})

userName.addEventListener("input", (e) => {
	investor = e.target.value
})

submit.addEventListener("click", () => {
	if(selectedTier != null && investor != "") {
		console.log("hello")
	}
})

function init () {
	tiers.selectedIndex = -1
	selectedTier = tiers.value
}

init()

// console.log(tiers.value)