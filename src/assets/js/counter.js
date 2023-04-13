function contador(contadorElemento) {
    const fechaLimite = new Date(Date.now() + (1 * 24 * 60 * 60 * 1000) + (2 * 60 * 60 * 1000) + (15 * 60 * 1000) + (20 * 1000)); // fecha límite: 1 día, 2 horas, 15 minutos y 20 segundos desde ahora
    const intervalId = setInterval(() => {
      const ahora = new Date().getTime(); // tiempo actual
      const diferencia = fechaLimite - ahora; // diferencia entre la fecha límite y el tiempo actual
      
      // cálculos para obtener días, horas, minutos y segundos
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
      
      // construir la cadena de texto del contador
      let contadorTexto = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
      
      // actualizar el elemento del contador en la página
      contadorElemento.textContent = contadorTexto;
      
      // si la fecha límite ha pasado, detener el intervalo y mostrar un mensaje
      if (diferencia < 0) {
        clearInterval(intervalId);
        contadorElemento.textContent = "¡Tiempo agotado!";
      }
    }, 1000); // intervalo de 1 segundo
  }
  