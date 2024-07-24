const myButton : HTMLButtonElement | null = document.getElementById("mybutton") as HTMLButtonElement;

myButton.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault();
    // event.printSomthing();
    console.log("asdasdas");
})
