const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function copiar() {
    let copyText = document.querySelector(".mensaje");
    copyText.select();
    document.execCommand("copy");
  }

function btnBorrar()
{
    mensaje.value = "";
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btnEncriptar()
{
  const textoEncriptado = encriptar(textArea.value)
      mensaje.value = textoEncriptado
 /* textArea.value = ""; Creo ue esta bien ver de donde viene el texto */
    mensaje.style.backgroundImage = "none"
}

function btnDesencriptar()
{
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
   /*  textArea.value = "";  Creo ue esta bien ver de donde viene el texto */
}

function encriptar(stringEncriptada)
{
    let matrizCodigo = [['è', 'e'], ['é', 'e'], ['ì', 'i'], ['í', 'i'], ['à', 'a'], ['á', 'a'], ['ò', 'o'], ['ó', 'o'], ['ù', 'u'], ['ú', 'u'], ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"], ['ª',''],['º',''],['|',''],['"',''],['@',''],['#',''],['·',''],['$',''],['~',''],['%',''],['&',''],['¬',''],['(',''],[')',''],['=',''],["'",""],['¿',''],['?',''],['¡',''],['!',''],['<',''],['>',''],['^',''],['`',''],['*',''],['[',''],[']',''],['¨',''],['{',''],['}',''],['Ç',''],[';',''],[',',''],['.',''],[':',''],['-',''],['_','']] ;

    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i ++)
    {
        if(stringEncriptada.includes(matrizCodigo[i][0]))
        {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada)
{
   let matrizCodigo = [['e', 'è'], ['e', 'é'], ['i', 'ì'], ['i', 'í'], ['a', 'à'], ['a', 'á'], ['o', 'ò'], ['o', 'ó'], ['u', 'ù'], ['u', 'ú'], ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u","ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i ++)
    {
        if(stringDesencriptada.includes(matrizCodigo[i][1]))
        {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
