const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function showMore() {
  var btnMenu = $('#btn-menu');
  if (btnMenu.hasClass('active')) {
    btnMenu.removeClass('active');
  } else {
    btnMenu.addClass('active');
    setTimeout(function() {
      btnMenu.focus();
    }, 200)
  }
}

function preventBlur(e) {
  e.preventDefault();
}
/*=============Slide of Testimonies================*/
var spotTest = 1;
show(spotTest);

function plus(n) {
  show(spotTest += n);
}

function show(n) {
  var i;
  var x = document.getElementsByClassName("slider-item");
  if (n > x.length) {
    spotTest = 1;
  }
  if (n < 1) {
    spotTest = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[spotTest - 1].style.display = "block";
}

/*=============Slide of Client================*/
var spot = 1;
display(spot);

function move(n) {
  display(spot += n);
}

function display(n) {
  var i;
  var x = document.getElementsByClassName("brand-img");
  if (n > x.length) {
    spot = 1;
  }
  if (n < 1) {
    spot = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[spot - 1].style.display = "block";
}
/*==================Check Form Stay Connected====================*/
function checkEmail(mailId, errorID) {
  var email = document.getElementById(mailId).value;
  if (!re.test(email) && email != '') {
    document.getElementById(errorID).innerHTML = "Invalid Email";
    return false;
  }
  return true;
}

function validateForm() {
  var name = $('#fullName').val();
  var email = $('#email').val();
  if (name == '' || email == '') {
    document.getElementById('joinsms').innerHTML = "Please Enter Your Name and Password!!!";
  } else {
    if ((name !== '') && (email !== '') && checkEmail('email', 'joinsms')) {
      $.ajax({
        type: 'POST',
        url: 'https://docs.google.com/a/configurateapp.com/forms/d/e/1FAIpQLSeOsHmfeS_c3oFwfCskzMHIi0Z4e06jxDw-1d9FCusF-pROfw/formResponse',
        data: {
          'entry.638706974': name,
          'entry.284291159': email,
        },
        dataType: 'xhr',
        statusCode: {
          0: function() {
            $('#fullName').val();
            $('#email').val();
            $('#joinsms').removeClass('error').text('Thank you! We will contact you shortly.');
            setTimeout(function() {
              $('#joinsms').text('');
            }, 5000);
          },
          200: function() {
            $('#fullName').val();
            $('#email').val();
            $('#joinsms').removeClass('error').text('Thank you! We will contact you shortly.');
            setTimeout(function() {
              $('#joinsms').text('');
            }, 5000);
          }
        }
      });
    }
  }
}
$('#contact').submit(function(evt) {
  validateForm();
  checkEmail();
  evt.preventDefault();
});

function valid() {
  validateForm();
  checkEmail('email', 'joinsms');
}

/*==================Check Form Talk To Us====================*/


function formTalk() {
  var yourname = $('#fullNameTalk').val();
  var emailTalk = $('#emailTalk').val();
  var phone = $('#phone').val();
  var message = $('#comment').val();
  if ((yourname !== '') && (emailTalk !== '') && (phone !== '') && checkEmail('emailTalk', 'joinsmsTalk')) {
    $.ajax({
      type: 'POST',
      url: 'https://docs.google.com/a/configurateapp.com/forms/d/e/1FAIpQLSd6ngZ4IVUdtKLX6ZXDss3VepmFtOyzfO18BGTW-sJ8Hyf3Ag/formResponse',
      data: {
        'entry.1963031490': yourname,
        'entry.1889654362': emailTalk,
        'entry.1180840537': phone,
        'entry.464519656': message,
      },
      dataType: 'xhr',
      statusCode: {
        0: function() {
          $('#fullNameTalk').val();
          $('#emailTalk').val();
          $('#phone').val();
          $('#comment').val();
          $('#joinsmsTalk').removeClass('errorTalk').text('Thank you! We will contact you shortly.');
          setTimeout(function() {
            $('#joinsmsTalk').text('');
          }, 5000);
        },
        200: function() {
          $('#fullNameTalk').val();
          $('#emailTalk').val();
          $('#phone').val();
          $('#comment').val();
          $('#joinsmsTalk').removeClass('errorTalk').text('Thank you! We will contact you shortly.');
          setTimeout(function() {
            $('#joinsmsTalk').text('');
          }, 5000);
        }
      }
    });
  } else {
    var joinsmsTalk = document.getElementById('joinsmsTalk');
    if (yourname == '') {
      joinsmsTalk.innerHTML = "Please Enter Your Name";
    }

    if (emailTalk == '') {
      joinsmsTalk.innerHTML = "Please Enter your Email!!!";
    }
    if (isNaN(phone)) {
      joinsmsTalk.innerHTML = "Phone has been a number!!!";
    } else if (phone == '') {
      joinsmsTalk.innerHTML = "Please Enter your Phone Number!!!";
    } else {
      if (phone.length > 11) {
        joinsmsTalk.innerHTML = "Invalid Phone Number!!!";
      }
    }
  }
  return true;
}
$('#talkToUs').submit(function(evt) {
  formTalk();
  checkEmail();
  evt.preventDefault();
});

function validTalk() {
  formTalk();
  checkEmail('emailTalk', 'joinsmsTalk');
}