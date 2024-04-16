function selectBlock(selectedIndex) {
    let blocks = document.querySelectorAll('.block');
    blocks.forEach((block, index) => {
        if (index === selectedIndex - 1) {
            block.classList.add('selected');
        } else {
            block.classList.remove('selected');
        }
    });
}

        // Показываем блок, который соответствует активной кнопке при загрузке страницы
        document.addEventListener("DOMContentLoaded", function(event) {
            var activeButton = document.querySelector('.ok-button');
            var activeBlockId = activeButton.getAttribute('onclick').split("'")[1];
            var activeBlock = document.getElementById(activeBlockId);
            activeBlock.classList.add('active-block');
            activeButton.classList.remove('ok-button');
            activeButton.classList.add('non-button');
            var inactiveButton = document.getElementById('delivery_delivery');
            inactiveButton.classList.remove('non-button');
            inactiveButton.classList.add('ok-button');
        });

        function toggleBlock(blockId, activeButtonId, inactiveButtonId) {
            var block = document.getElementById(blockId);

            // Показываем блок, скрываем остальные блоки
            var blocks = document.getElementsByClassName("delivery_block1");
            for (var i = 0; i < blocks.length; i++) {
                blocks[i].classList.remove('active-block');
            }
            block.classList.add('active-block');

            // Меняем цвета кнопок
            var activeButton = document.getElementById(activeButtonId);
            var inactiveButton = document.getElementById(inactiveButtonId);
            activeButton.classList.remove('ok-button');
            activeButton.classList.add('non-button');
            inactiveButton.classList.remove('non-button');
            inactiveButton.classList.add('ok-button');
        }

        document.addEventListener("DOMContentLoaded", function() {
            var blocks = document.querySelectorAll(".b");
        
            blocks.forEach(function(block) {
                block.addEventListener("click", function() {
                    blocks.forEach(function(b) {
                        b.classList.remove("black-border");
                    });
                    this.classList.add("black-border");
                });
            });
        });

        const checkboxes = document.querySelectorAll('input[name="checkbox"]');
let lastChecked = null;

function handleCheck(e) {
    if (this !== lastChecked) {
        lastChecked = this;
        checkboxes.forEach(checkbox => {
            if (checkbox !== this) {
                checkbox.checked = false;
            }
        });
    }
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));