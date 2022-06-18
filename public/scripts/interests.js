/*Javascript file for home page
Created 17/06/2022 by Alexander Atwell*/

function intFunc(button){
      var elem = button.id;
      const initialText = 'Add+';

        switch (elem) {
            case 'btn':
                document.getElementById('btn1').innerHTML = 'Add+';
                document.getElementById('btn2').innerHTML = 'Add+';
                document.getElementById('btn3').innerHTML = 'Add+';
                document.getElementById('btn4').innerHTML = 'Add+';
                document.getElementById('btn5').innerHTML = 'Add+';
                document.getElementById('btn6').innerHTML = 'Add+';
                document.getElementById('btn7').innerHTML = 'Add+';
                document.getElementById('btn8').innerHTML = 'Add+';
                document.getElementById('btn9').innerHTML = 'Add+';
                break;
            case 'btn1':
                 if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                    button.innerHTML = 'Remove-';
                 } else {
                   button.innerHTML = initialText;
                 }
                break;
            case 'btn2':
                 if (button.textContent.toLowerCase().includes(initialText.toLowerCase())){
                    button.innerHTML = 'Remove-';
                 } else {
                    button.innerHTML = initialText;
                 }
                break;
            case 'btn3':
                 if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                        button.innerHTML = 'Remove-';
                 } else {
                   button.innerHTML = initialText;
                 }
                break;
            case 'btn4':
                 if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                    button.innerHTML = 'Remove-';
                 } else {
                   button.innerHTML = initialText;
                 }
                break;
            case 'btn5':
                  if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                     button.innerHTML = 'Remove-';
                  } else {
                    button.innerHTML = initialText;
                  }
                 break;
             case 'btn6':
                  if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                     button.innerHTML = 'Remove-';
                  } else {
                    button.innerHTML = initialText;
                  }
                 break;
             case 'btn7':
                 if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                    button.innerHTML = 'Remove-';
                 } else {
                   button.innerHTML = initialText;
                 }
                 break;
             case 'btn8':
                  if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                     button.innerHTML = 'Remove-';
                  } else {
                    button.innerHTML = initialText;
                  }
                 break;
             case 'btn9':
                  if (button.textContent.toLowerCase().includes(initialText.toLowerCase())) {
                     button.innerHTML = 'Remove-';
                  } else {
                    button.innerHTML = initialText;
                  }
                 break;
            default:
                return false;
        }
}
