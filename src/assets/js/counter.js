
export default function counter(counterElement) {
    const limitDate = new Date(Date.now() + (1 * 24 * 60 * 60 * 1000) + (2 * 60 * 60 * 1000) + (15 * 60 * 1000) + (20 * 1000)); // time to end: 1 day, 2 hours, 15 minutes and 20 seconds from now.
    const intervalId = setInterval(() => {
      const now = new Date().getTime(); 
      const deltaDate = limitDate - now;
       
      const days = Math.floor(deltaDate / (1000 * 60 * 60 * 24));
      const hours = Math.floor((deltaDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((deltaDate % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((deltaDate % (1000 * 60)) / 1000);
       
      let textCounter = `Quedan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;
       
      counterElement.textContent = textCounter;
       
      if (deltaDate < 0) {
        clearInterval(intervalId);
        counterElement.textContent = "¡Tiempo agotado!";
      }
    }, 1000);
  }
  