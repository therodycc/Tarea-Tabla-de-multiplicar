window.onload = function () {
    numero = prompt("Introduce un numero: ");

    document.write("<table border = 2> <tr><td>" + numero + "</td><td>Resultado</td></tr>");
    for (i = 0; i <= 10; i++) {
        document.write("<tr><td>" + numero + " x " + i + "</td><td> =  " + numero * i + "</td></tr>");
    }
    document.write("</table>");

}