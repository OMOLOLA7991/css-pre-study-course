//Declare Variables
 let okBtn = document.querySelector('.btn_1');
 let cancelBtn = document.querySelector('.btn_2'); 
 let noteHolder = document.querySelector('.notes-holder');
 let modalForm = document.querySelector('.pop-up_details');
 let textArea = document.querySelector('#text-input');
 let articleHolder = document.querySelector('.article');
 let postCount = document.querySelector('#notes');
 
 //event listeners
 modalForm.addEventListener('submit', createNote);
 
 
 //Create functions
 function createNote() {
    let input = noteHolder.value;
    let input_body = textArea.value;
    let date = new Date();
    
    //create Element
    let article = document.createElement('article');
    article.innerHTML = `
    <h2><span>${date.toLocaleDateString('en-GB')}</span>: ${input}</h2>
    <div class="article-heading"> 
    <p>
       ${input_body} 
    </p>
    <p><img src="images/spatula.gif" alt="spatulas" class="spatula"></p>
    </div>  
     `

    //call the inputs in the artcle to show before other artcles with the use of PREPEND
     articleHolder.prepend(article);
     
     
     updateArticleCount();
 }
// ///To deactivate empty inputs
//   function manage(text-input) {
//     var okBtn = document.querySelector('.btn_1');
//     if (txt.value != '') {
//         bt.disabled = false;
//     }
//     else {
//         bt.disabled = true;
//     }
// }
   //to Count the article
    postCount.textContent = "you have 2 notes"; 
    
    function updateArticleCount() {
        let articles = articleHolder.childElementCount;
        if(articles == 0){
            postCount.textContent = "you have 0 notes";  
        }
        else{
            postCount.textContent = `you have ${articles} notes`; 
        }
        
    }




 















const toggleModal = () => {
    document.querySelector('.modal').classList.toggle('modal--hidden');
};
document.querySelector('#click').addEventListener('click', toggleModal);

document.querySelector('.pop-up_details').addEventListener('submit', (event) => {
    event.preventDefault();
    toggleModal();
});
   
document.querySelector('.modal_close-bar span').addEventListener('click', toggleModal);



