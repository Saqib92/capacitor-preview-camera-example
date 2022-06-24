import { Component, OnInit } from '@angular/core';
import { PreviewCamera } from '@numbersprotocol/preview-camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  recording: boolean = false;

  constructor() {

  }
  
  ngOnInit() {
    this.startCam();
    PreviewCamera.addListener(
      'capturePhotoFinished',
      (res)=>{
        console.log(res)
      }
    ).then((e:any)=>{
      console.log(e)
    })
  }


  async startCam(){
     let res = await PreviewCamera.startPreview()
     console.log('preview', res)
  }

  async recordCam(){
    this.recording = true;
    let res = await PreviewCamera.startRecord();
    console.log('start' , res)

  }

  async stopCam(){
    this.recording = false;
    let res = await PreviewCamera.stopRecord()
    console.log(res);
  }

}
