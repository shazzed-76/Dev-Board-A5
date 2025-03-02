
const completeBtn = document.getElementsByClassName('complete-btn');

for (const btn of completeBtn) {
    btn.addEventListener('click', function () {        
        
        btn.style.opacity = '.20';
        const taskNumber = getId('task-number');
        const completeTask = getId('completed-task');
        
      
       if (taskNumber > 0) {

        alert('Board updated successfully');

        const remainingTask = taskNumber - 1;
        document.getElementById('task-number').innerText = remainingTask;
        
        const totalCompletedTask = completeTask + 1;
       document.getElementById('completed-task').innerText = totalCompletedTask;

       
       const historyBox = document.getElementById('history-box');
       
       const p = document.createElement('p');
       p.classList.add('bg-[#F4F7FF]', 'p-2', 'rounded-lg', 'mb-3', 'text-sm')

       p.innerText = ` You have completed the task at 1 am `;
      
        

       historyBox.appendChild(p);

       if (btn === completeBtn[completeBtn.length - 1]){
        alert('Congratulation! You completed all task.')
       }

       }

       else {
        alert('You have complete the all task.')
       }

    
      
    })
}

 


// add event handler on the history button
document.getElementById('clear-btn').addEventListener('click', function () {
    
    const historyBox = document.querySelector('#history-box');
    historyBox.innerHTML = '';
    
  
    
})


// add event handler on theme btn
document.getElementById('theme-btn').addEventListener('click', function () {

    color = ['#aaa69d', '#f5cd79', '#f3a683', '#BDC581', '#CAD3C8', '#F8EFBA' ];
   

    const randomColor = Math.floor( Math.random() * color.length);
    
    document.body.style.backgroundColor = color[randomColor];
    console.log(randomColor)

  
})


// add event handler on the blog btn
document.getElementById('blog-btn').addEventListener('click', function () {
   window.location.href = 'question-page.html'
})


getIdByName('btn-1').addEventListener('click', function () {
    getIdByName('btn-1').disabled = true;    
 });

getIdByName('btn-2').addEventListener('click', function () {
    getIdByName('btn-2').disabled = true;    
 });

getIdByName('btn-3').addEventListener('click', function () {
    getIdByName('btn-3').disabled = true;    
 });

getIdByName('btn-4').addEventListener('click', function () {
    getIdByName('btn-4').disabled = true;    
 });

getIdByName('btn-5').addEventListener('click', function () {
    getIdByName('btn-5').disabled = true;    
 });

getIdByName('btn-6').addEventListener('click', function () {
    getIdByName('btn-6').disabled = true;    
 });

 