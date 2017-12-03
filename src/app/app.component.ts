import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DojoMail';
  email = [{email: 'code@bots.com', important: true, subject: 'hi im a bot', content: 'a bunch of spam'},
{email: 'json@lee.com', important: false, subject: 'my email address', content: 'a bunch of advertisements'},
{email: 'brian@duong.com', important: true, subject: 'brians email address', content: 'a bunch of hacktivism'},
{email: 'yukie@hirano.com', important: true, subject: 'yukies email address', content: 'a brunch of misspelling'}]
}
