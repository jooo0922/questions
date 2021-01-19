'use strict';
// using selector inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
  // console.log(question);

  // document로 쓰려면 document.querSelectorAll() 로 써야하고 그러면 결국 버튼 3개를 모두 선택하게 되는 것임.
  // 근데 우리가 원하는 건, forEach()의 콜백함수 내에서 각각의 .question 안에 있는 버튼들에 접근하는 것임!
  // 그렇게 하려면 forEach의 콜백함수 내에서 questions array의 요소들인 question 즉, .question들 각각에서
  // question.querySelector()로 접근해서 각각의 버튼 하나하나에 접근하는 게 맞는거지! 
  const btn = question.querySelector('.question-btn');
  // console.log(btn);

  btn.addEventListener('click', function(){
    // 이번에는 각각의 btn을 눌렀을 때 이미 펼쳐져있는 다른 text는 사라지도록, 다른 article 태그에 이미 add된 'show-text' 클래스가 없어지게 해보자. 
    // 그러려면 일단 모든 question이 담긴 questions 배열을 가져와야 함. 해당 변수는 global scope이기 때문에 콜백함수 블록안으로 가져올 수 있음.
    // 이미 위에서 첫번째 forEach의 파라미터 이름을 question으로 받았기 때문에, 여기서는 그것과 다른 이름을 사용해야 함.
    questions.forEach(function(item){
      // console.log(item);
      // 이 if문이 의미하는 바는 '현재 내가 클릭한 question과 다른 item들, 상관없는 item들은 'show-text'가 붙어있으면 remove해줘' 라는 뜻. 
      if(item !== question){
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});

// traversing the dom
/*
const btns = document.querySelectorAll('.question-btn');

// 버튼이 question당 하나씩, 즉 3개가 있으니까 btns는 3개의 버튼이 담긴 배열이 됨.
// 얘내를 일일이 addEventListener주기 귀찮으니 forEach로 각각의 버튼에 콜백함수를 실행하려는 것.
btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    // Node.parentElement returns the DOM node's parent Element
    // 그래서 부모의 부모 노드에 접근하려면 말그대로 그냥 두 번 연달아 써주면 됨.
    // console.log(e.currentTarget.parentElement.parentElement);
    // console.log(e.target);
    
    // event.target vs event.currentTarget
    // currentTarget은 해당 이벤트가 걸려있는 노드가 반환됨.
    // 즉, btn.addEventListener()에서 btn에 담긴 노드 = <button>이 반환됨.
    
    // 반면 target은 해당 이벤트가 걸려있는 노드의 '최하위 자식노드'가 반환됨.
    
    // <button type="button" class="question-btn">
    //   <span class="plus-icon">
    //     <i class="far fa-plus-square"></i>
    //   </span>
    // </button>
    // 이 상태에서 event는 button 태그에 걸려있지만,
    // 최하위 자식노드는 <i> 이므로 얘가 반환됨. 
    // 즉, 실질적으로 '마우스로 클릭한 요소'를 반환하는거임.
    // 이 차이를 확실하게 이해할 것!
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});
*/
