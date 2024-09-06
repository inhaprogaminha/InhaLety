const titulo = document.querySelector('.titulo')
const imagemPerfil = document.querySelector('.imagem-perfil')
const loginPerfil = document.querySelector('.login-perfil')
const segPerfil = document.querySelector('.seg-perfil')
const reposPerfil = document.querySelector('.repos-perfil')
const bioPerfil = document.querySelector('.bio-perfil')
const locPerfil = document.querySelector('.loc-perfil')

const getInfos = async () =>{
    const response = await fetch('https://api.github.com/users/inhaprogaminha')
    const data = await response.json()
    titulo.innerHTML = data.name
    imagemPerfil.setAttribute('src',data.avatar_url)
    bioPerfil.document = data.bio
    segPerfil.innerHTML= `seguidores ${data.followers} e seguindo ${data.following} perfil`
    locPerfil.innerHTML = data.location    
    reposPerfil.innerHTML = data.public_repos
} 
getInfos()
