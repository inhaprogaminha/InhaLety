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
    console.log(data)
    if(!data.name){
        titulo.innerHTML = 'Yasmin'
        reposPerfil.innerHTML = '60'
        imagemPerfil.setAttribute('src', 'data.https://placeholder.com/100x100')
        bioPerfil.document = 'Sou Yasmin Desen..'
        segPerfil.innerHTML= 'Seguidores 123 e seguindo 123 perfil'
        locPerfil.innerHTML = 'BAYEUX'



    }else{
        titulo.innerHTML = data.name
        reposPerfil.innerHTML = data.public_reposimagemPerfil.setAttribute('src',data.avatar_url)
        bioPerfil.document = data.bio
        segPerfil.innerHTML= `seguidores ${data.followers} e seguindo ${data.following} perfil`
        locPerfil.innerHTML = data.location


    }

    
} 
getInfos()