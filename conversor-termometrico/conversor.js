function converter(){
    let select1 = document.getElementById('select1').value
    let select2 = document.getElementById('select2').value
    let number = Number(document.getElementById('num').value)
    let result = document.getElementById('res')

    if(select1 == 'c' && select2 == 'c'){
        result.value = `${c_to_c(number).toFixed(1)}ºC`
    }else if(select1 == 'c' && select2 == 'k'){
        result.value = `${c_to_k(number).toFixed(1)}K`
    }else if(select1 == 'c' && select2 == 'f'){
        result.value = `${c_to_f(number).toFixed(1)}ºF`
    }else if(select1 == 'k' && select2 == 'c'){
        result.value = `${k_to_c(number).toFixed(1)}ºC`
    }else if(select1 == 'k' && select2 == 'k'){
        result.value = `${k_to_k(number).toFixed(1)}K`
    }else if(select1 == 'k' && select2 == 'f'){
        result.value = `${k_to_f(number).toFixed(1)}ºF`
    }else if(select1 == 'f' && select2 == 'c'){
        result.value = `${f_to_c(number).toFixed(1)}ºC`
    }else if(select1 == 'f' && select2 == 'k'){
        result.value = `${f_to_k(number).toFixed(1)}K`
    }else if(select1 == 'f' && select2 == 'f'){
        result.value = `${f_to_f(number).toFixed(1)}ºF`
    }else{
        erro(select1,select2)
    }
}
function c_to_c(n){
    return n
}
function c_to_k(n){
    return n + 273.15 
}
function c_to_f(n){
    return ((n/5)*9)+32
}
function k_to_c(n){
    return n = n - 273.15
}
function k_to_k(n){
    return n
}
function k_to_f(n){
    return (n - 273.15) * 9/5 + 32
}
function f_to_c(n){
    return ((n-32)/9)*5
}
function f_to_k(n){
    return ((n - 32) * (5/9)) + 273.15
}
function f_to_f(n){
    return n
}
function erro(s1,s2){
    if(s1 != 'none' && s2 == 'none'){
        window.alert('A segunta opção não foi selecionada!')
    }else if(s1 == 'none' && s2 != 'none'){
        window.alert('A primeira opção não foi selecionada!')
    }else{
        window.alert('Nenhuma opção foi selecionada!')
    }
}
