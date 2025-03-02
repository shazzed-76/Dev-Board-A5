
const completeBtn = document.getElementsByClassName('complete-btn');

for (const btn of completeBtn) {
    btn.addEventListener('click', function () {        
        
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


