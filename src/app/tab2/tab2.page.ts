import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// IREMOS INSTALAR ESSE
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title: String;

  // prof - camera
  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { // prof -camera
    this.title = "CÂMERA"
   }

  fotografar(){
    console.log("Tirando foto")
  }

  // prof - camera
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }


}
