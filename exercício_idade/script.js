function verificar(){
  var data= new Date()
  var ano = data.getFullYear() // irá pegar os quatro digitos do ano.
  var fano = document.getElementById('txtano') //uma forma de fazer usando id.
  var res = document.querySelector('div#res')  // outra forma de fazer usando a div.

  if (fano.value.length == 0 || Number (fano.value) > ano){
    window.alert('Verifique os dados e tente novamente!')
  }else {
    var fsex =  document.getElementsByName('radsex')
    var idade = ano - Number (fano.value)
    var genero= ''
    var img =  document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10 ){
            //Criança
             img.setAttribute('src', 'babyBoy.png')
        }else if( idade <21){
            //Jovem
            img.setAttribute('src','youngMan.png')
        }else if( idade < 59){
            //Adulto
            img.setAttribute('src', 'grownMan.png')
        }else{
            //idoso
            img.setAttribute('src','oldMan.png')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade < 10 ){
            //Criança
            img.setAttribute('src','babyGirl.png')
        }else if( idade <21){
            //Jovem
            img.setAttribute('src','youngWoman.png')
        }else if( idade < 59){
            //Adulto
            img.setAttribute('src', 'grownWoman.png')
        }else{
            //idoso
            img.setAttribute('src','oldWoman.png')
        }
    }
    res.style.textAlign = 'center '
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

  }

   
}