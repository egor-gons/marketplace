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