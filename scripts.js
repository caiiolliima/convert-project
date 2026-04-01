const amount = document.getElementById("amount")

amount.addEventListener("input", () =>{
    const hasCharacterRegex = /\D+/g //padrão do regex que busca caracteres no input
    amount.value = amount.value.replace(hasCharacterRegex, "") //retorna o "amount" substituindo os valores caso tenha textos.
})