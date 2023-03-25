const unencrypted = document.querySelector('.unencrypted')
const encrypted = document.querySelector('.encrypted')

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


const encryption = () => {
         let pass = unencrypted.value.toLowerCase().split('')
         let encryptedWord = ''
		for (let i = 0; i < pass.length; i++) {
			if (!/[a-z]/.test(pass[i])) {
				encryptedWord += pass[i]
			} else {
				let index = alphabet.indexOf(pass[i])
				encryptedWord += alphabet[(index + 13) % alphabet.length]
			}
		}
		encrypted.textContent = encryptedWord
		console.log(alphabet.length);
}







unencrypted.addEventListener('input', encryption)