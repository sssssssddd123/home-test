// 버튼
// $('#btnTest').on('click', function () {
//   $('.black-bg').fadeIn();
// });

// $('#close').on('click', function () {
//   $('.black-bg').fadeOut();
// });

document.querySelector('#btnTest').addEventListener('click', function () {
  document.querySelector('.black-bg').classList.add('show');
});

document.querySelector('#close').addEventListener('click', function () {
  document.querySelector('.black-bg').classList.remove('show');
});

document.querySelector('.black-bg').addEventListener('click', function (e) {
  e.target.classList.remove('show');
});



// 목록
document.querySelector('.navbar-toggler')
  .addEventListener('click', function () {
    document.querySelector('.list-group').classList.toggle('show');
  });


// 로그인 Id, Pw 확인
$('form').on('submit', function (e) {
  e.preventDefault();

  let id = document.getElementById("userId").value;
  let pw = document.getElementById("userPw").value;

  if (id == "" || pw == "") {
    alert('값을 입력하세요.');
  } else if (!/\S+@\S+\.\S+/.test(id)) {
    alert('eMail 형식으로 입력해 주세요');
  } else if (pw.length < 6) {
    alert('비밀번호는 6자리 이상 입력하세요');
  } else if (!/[A-Z]/.test(pw)) {
    alert('비밀번호에 대문자를 포함시켜주세요');
  } else {
    alert('나는 코딩 고수야.');
    $('.black-bg').hide();
  }

  document.getElementById("userId").value = "";
  document.getElementById("userPw").value = "";
})

// Dark -> Light 변경
var cnt = 1;
$('.Dark').on('click', function () {
  cnt = cnt + 1;
  if (cnt % 2 == 1) {
    $('.Dark').html('Light 🔄');
    document.querySelector('body').style.backgroundColor = '#ffffff';
  } else {
    document.querySelector('.Dark').innerHTML = 'Dark 🔄';
    document.querySelector('body').style.backgroundColor = '#353535';
  }
})