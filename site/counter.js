let counter = 1; // начальное значение счетчика
    
            function increment() {
                if (counter < 999) {
                    counter++;
                    document.getElementById('counterValue').innerText = counter;
                }
            }
    
            function decrement() {
                if (counter > 1) {
                    counter--;
                    document.getElementById('counterValue').innerText = counter;
                }
            }


            document.querySelector('.create_reviews').addEventListener('click', function() {
                document.getElementById('modal').style.display = 'block';
              });
              
              document.querySelector('.close').addEventListener('click', function() {
                document.getElementById('modal').style.display = 'none';
              });
              
              window.addEventListener('click', function(event) {
                if (event.target == document.getElementById('modal')) {
                  document.getElementById('modal').style.display = 'none';
                }
              });
              