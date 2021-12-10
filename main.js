'use strict';

let lInput = document.getElementById('length');
let wInput = document.getElementById('width');
let hInput = document.getElementById('height');

const submitBtn = document.querySelector('.submit__btn')
const displyOverallSize = document.querySelector('.ans__p')
const calcImg = document.querySelector('.calc__img')
const calcHowTo = document.querySelector('.calc__container-info')

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let allpointsArr = [
        Number(lInput.value), 
        Number(wInput.value), 
        Number(hInput.value)
    ];
    
    allpointsArr.sort(function(a, b){return a - b}
    );

      const twoSmallAdd = (allpointsArr[0] + allpointsArr[1]);

      const twoSmallMultiply = twoSmallAdd * 2;

      const overallSize = (twoSmallMultiply + allpointsArr[2])

        if(displyOverallSize) {
        
            calcImg.remove('.active')    
            displyOverallSize.classList.add("active"); 
      
            displyOverallSize.textContent = `Overall size is ${overallSize}cm`

            calcHowTo.innerHTML = '';

            const html = `
            <h1 class="calc__h1" id="calc__h1">How to calculate the overall size</h1>

            <p class="calc__p">
                When sending your parcel, it's important that it meets the size guidelines: Parcel sizes.
                With some services there are restrictions on the maximum allowed which is calculated with the Overall
                Size.
            </p>

            <p class="calc__p">
                <span class="span-orange"> How to calculate overall size:</span> Take the two shortest sides of your
                parcel and sum them.
                Multiply the sum by 2 and finally add the length. The total is the overall size.
            </p>

            <li class="calc__li">1. Add together the 2 shortest sides: ${allpointsArr[0]} + ${allpointsArr[1]} = ${twoSmallAdd}.</li>
            <li class="calc__li">2. Multiply this number by 2: ${twoSmallAdd} x 2 = ${twoSmallMultiply}.</li>
            <li class="calc__li">3. Add the longest length to this number: ${twoSmallMultiply} + ${allpointsArr[2]} = ${overallSize}.</li>

            <p class="calc__p">
                <span class="span-strong"> The overall is in this case is ${overallSize}cm.</span>
            </p>
           `;

           calcHowTo.insertAdjacentHTML('afterbegin', html);     
        }
            
  });