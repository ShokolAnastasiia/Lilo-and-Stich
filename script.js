document.addEventListener("DOMContentLoaded", function () {

    //
    let team1 = document.querySelector('.team1')
    let team2 = document.querySelector('.team2')
    let team3 = document.querySelector('.team3')

    if (team1 && team2 && team3) {
        let height = Math.max(
            parseInt(getComputedStyle(team1).getPropertyValue('height')),
            parseInt(getComputedStyle(team2).getPropertyValue('height')),
            parseInt(getComputedStyle(team3).getPropertyValue('height'))
        )

        team1.style.height = `${height}px`
        team2.style.height = `${height}px`
        team3.style.height = `${height}px`
    }

    // 
 

  function scrollDown() {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }

  let button = document.querySelector('.arrow-next');
  if (button) button.addEventListener('click', scrollDown);

  let item_name_objects = document.querySelectorAll('.merch-item-name');
  let item_description_objects = document.querySelectorAll('.merch-item-descr');
  let item_price_objects = document.querySelectorAll('.merch-item-price');

  let item_names = ['Футболка', 'Шопер', 'Плюшева іграшка', 'Funko POP'];
  let item_descriptions = [
    'Жовта футболка з яскравим принтом Стіча серед квітів — стильна, легка й помітна',
    'Легкий і стильний шопер із міцного матеріалу — практичний для щоденного використання',
    'М’який плюшевий Стiч із великими лапами — милий, пухкий компаньйон для обіймів',
    'Мініфігурка Funko Pop — стильний колекційний вініл'
  ];
  let item_prices = [450, 450, 700, 680];

    for (let i = 0; i < item_name_objects.length; i++) {
        
        item_price_objects[i].innerHTML = item_prices[i] + " грн"
    }

    //Кошик
    let total_price = 0
    let cart_items_count = document.querySelector('.cart-amount')
    let add_to_cart_buttons = document.querySelectorAll('.add-to-cart-btn')

    let cart_button = document.querySelectorAll('.nav-item')[3]
    let cart_button_text = cart_button.querySelector('.cart-text')

    for (let i = 0; i < add_to_cart_buttons.length; i++) {
        add_to_cart_buttons[i].addEventListener('click', function () {
            cart_items_count.innerHTML = +cart_items_count.innerHTML + 1
            total_price += item_prices[i]
            cart_button_text.innerHTML = total_price
        })
    }

    cart_button.addEventListener('click', function () {
        if (cart_button_text.innerHTML == 'Кошик') {
            cart_button_text.innerHTML = total_price
        } else {
            cart_button_text.innerHTML = 'Кошик'
        }
    })

    //Підрахунок вартості квитка
    function calc_price() {
        let days_input = document.querySelector('.days-input')
        let days_amount = days_input.value

        if (days_amount == '') {
            days_input.style.border = '1px solid #AD4851'
        } else {
            let one_day_price = +document.querySelector('.submit-select').value
            let total = +days_amount * one_day_price
            days_input.style.border = 'none'
            days_input.style.borderBottom = '1px solid #5D4229'
            alert(total + " грн")
        }
    }

    let calc_button = document.querySelector('.submit-btn-calc')
    calc_button.addEventListener('click', calc_price)

    //Красива кнопка "Відправити" 
    let send_btn = document.querySelector('.submit-btn-send')

    function make_transparent() {
        send_btn.style.backgroundColor = '#9b67fcff'
    }

    function make_colorful() {
        send_btn.style.backgroundColor = '#8340ff'
    }

    send_btn.addEventListener('mouseenter', make_transparent)
    send_btn.addEventListener('mouseleave', make_colorful)

    // Пасхалка 
    function easter_egg() {
        let mars = document.querySelectorAll('.mars')
        mars.forEach(item => item.style.color = '#AD4851')
    }

    document.querySelector('.mars1').addEventListener('click', easter_egg)

    console.log("Сторінка повністю завантажена!");
});
