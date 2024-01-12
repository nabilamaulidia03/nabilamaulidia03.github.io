const kirimPesan = () => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    message = `*Nama* : ${name}%0A*Email* : ${email} %0A*Pesan* : %0A${message}`
    window.open(`https://wa.me/6285884792243?text=${message}`, '_blank')
}