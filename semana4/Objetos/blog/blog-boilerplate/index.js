post = {
    titulo: document.getElementById("titulo-post").value,
     autor: document.getElementById("autor-post").value,
     conteudo: document.getElementById("conteudo-post").value,
}
     
tituloPost = post.titulo
autorPost = post.autor
conteudoPost = post.conteudo


addPost = () => {
    if(tituloPost.value == '' / autorPost.value == '' / conteudoPost.value == ''){
        alert()
    }else {
        containerPost = document.getElementById('container-de-posts')
        
}