import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [`
    .online{
    background: yellow
  }`]
})
export class ServersComponent implements OnInit {
  allowClicks = false;
  serverCreationStatus =  'No server created right sofar.';
  serverName = '';
  username = '';
  serverCreated = false;
  servers = ['Test server','Test server2'];
  ptoggle = false;
  tempArray = [];

  constructor() { 

    setTimeout(() => {
      this.allowClicks = true;
    }, 2000);

  }

  ngOnInit(): void {
  }


  toggle(){
    this.ptoggle = !this.ptoggle;
    this.tempArray.push(this.tempArray.length+1);
  }
  
  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server created! ' + this.serverName;
  }

  onUpdateServerName(event: Event){
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
