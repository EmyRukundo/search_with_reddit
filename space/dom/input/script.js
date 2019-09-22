// DOM ELEMENT REFERENCES
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const submitButton = document.getElementById('submit-button');
const sidebar = document.getElementById('sidebar');
const commentForm = document.getElementById('comment-form');

submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    sidebar.textContent = 'Hi there' +firstNameInput.value + '' + lastNameInput.value;
    commentForm.reset();
});

document.getElementById('sports-checkbox').addEventListener('change', ($event) => {
 if($event.target.checked){
     hobbiesResult.children[0].classList.remove('textsecondary');
 }else{
     hobbiesResult.children[0].classList.add('text-secondary');
 }
});
document.getElementById('games-checknox').addEventListener('change', ($event) =>{
    if($event.target.checked){
        hobbiesResult.children[1].classList.remove('textsecondary');
    }else{
        hobbiesResult.children[1].classList.add(text-secondary);
    }
})
document.getElementById('music-checkbox').addEventListener('change', ($event) => {
    if($event.target.checked){
        hobbiesResult.children[2].classList.remove('textsecondary');
    }else{
        hobbiesResult.children[2].classList.add(text-secondary);
    }
})