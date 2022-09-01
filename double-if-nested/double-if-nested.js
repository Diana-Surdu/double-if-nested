let userName = prompt('Enter username: ')

  if (userName == 'PrettyUser' || userName == 'BestUser' || userName == 'VIPUser') {
    let smsCode = +prompt('Confirm SMS code: ')
    if ( userName == 'PrettyUser' && smsCode === 123456) {
      console.log (`Welcome ${userName}!`)
    } else if (userName == 'BestUser' && smsCode === 654321) {
      console.log (`Welcome ${userName}!`)      
    } else if (userName == 'VIPUser' && smsCode === 999000) {
      console.log (`Welcome ${userName}!`)
    } else {
      alert('Wrong confirmation code!!!')
    }
  } else {
    alert('Wrong user name!!!')
  }
  
  
  
  