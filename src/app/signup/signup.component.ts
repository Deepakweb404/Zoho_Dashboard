import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  password:any;
  constructor() { }

  

  ngOnInit(): void {
    var password = document.getElementById('inlineFormInputGroupUsername');
    var toggler = document.getElementById('toggler');

    const showhidePassword=  ()=>{
      if(password?.getAttribute('type') == 'password'){  //password.type == 'password'
        password?.setAttribute('type','text');
          toggler?.classList.add('fa-eye-slash');
        }else{
          toggler?.classList.remove('fa-eye-slash');
          password?.setAttribute('type','password');
        }
      };
      toggler?.addEventListener('click',showhidePassword);
    }
  }


