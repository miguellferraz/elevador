let andarAtual = 0;

function move(targetAndar) {
    const elevator = document.getElementById("elevador");
    const andares = {
        3: "334px",  
        2: "166px", 
        1: "0px"  
    };

    const timeToMove = Math.abs(targetAndar - andarAtual) * 2000; 
    elevator.style.transitionDuration = `${timeToMove}ms`;

    elevator.style.bottom = andares[targetAndar];
    andarAtual = targetAndar;
}



