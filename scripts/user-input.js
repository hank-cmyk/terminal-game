// $(document).ready(function() {

//     function getName() {
//         //var input = document.getElementsByClassName('userInput').value;
//         var input = document.getElementById('userInput').value;
//         // var result = document.getElementById('resultingInput');

//         var playerName = document.getElementsByClassName('player')[0];
        
        
//     //     const playerName = document.querySelectorAll('.player');

//     //     for (let i = 0; i < playerName.length; i++) {
//     //        playerName[i].src = input;
    
//     //    }
    


//         if (input.length > 0) {
//             // result.textContent = input;

//             playerName.textContent = input;
            
            
        

//             // result[0].textContent = input;
//             // result[0].innerHTML = input;

//             // document.getElementById("resultingInput").innerHTML = input;

//             console.log ('input var = ' + input);
//             console.log ('result var = ' + input);

//             // console.log (result);
//             // console.log (input);
            
//             console.log ('before input = playerName' + playerName);
//             // playerName = input;

//             console.log ('after input = playerName' + playerName);
            


//         }
//         // console.log ('outside if statement input var = ' + input)

//         // var playerName = document.getElementsByClassName('player');

        

//      }



//     var submit = document.getElementById('submitButton');
//     submit.addEventListener('click', getName); 

//     getName();


// });

$(document).ready(function() {

    const state = {
        playerName: null
      };
      
      document.querySelector('#input-form')
        .addEventListener('submit', handleSubmit);
      
      function handleSubmit(e) {
        e.preventDefault(); // Stop page navigation
        
        updateState({
            playerName: getFormField(e.target, 'playerName').value
        });
        

        render();
        
      }
      
      function getFormField(form, name) {
        return form.elements[name];
      }
      
      function updateState(updates) {
        deepAssign(state, updates);
      }
      
      function render() {
        document.querySelectorAll('.player').forEach(player => {
          player.textContent = state.playerName;
        });
      }
      
      function deepAssign(target, source) {
        Object.keys(source).forEach(key => {
          if (isObject(target[key]) && isObject(source[key])) {
            deepAssign(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        });
        return target;
      }
      
      function isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
      }
      
      

});