import { Injectable } from '@angular/core';

declare var RTCPeerConnection: any;
declare var window: any;

@Injectable()
export class MyNewServiceService {

  constructor() { }

  tdd (){
    alert('click');
    console.log('click')
    return 1
  }

  /**
   * @method _MiIp se ocupa de guardar en sessionStorage datos como lo son la ip y la mac en caso que no esten definidos
   * @returns null
   */
  public  _MiIp():void{
    window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

    var MiIp;
    var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};

    pc.createDataChannel("");
    pc.createOffer(pc.setLocalDescription.bind(pc), noop);
    pc.onicecandidate = function(ice){
      if(!ice || !ice.candidate || !ice.candidate.candidate){
        return;
      } else{

        MiIp = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];

        sessionStorage.setItem('ip',MiIp);
        this.ip = MiIp;
        pc.onicecandidate = noop;
      }

    };
  }
}
