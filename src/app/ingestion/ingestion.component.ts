import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {IngestionUploadService} from "../ingestion-upload.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AuthentificationService} from "../authentification.service";

@Component({
  selector: 'app-ingestion',
  templateUrl: './ingestion.component.html',
  styleUrls: ['./ingestion.component.css']
})
export class IngestionComponent implements OnInit {
  panelOpenState = false;
  profileForm: FormGroup;
  error: string;
  fileUpload:any;
  // fileUpload = {status: '', message: '', filePath: ''};
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private fb: FormBuilder, private fileUploadService: IngestionUploadService,
              public router:Router,public route:ActivatedRoute,public authService: AuthentificationService) {

   /* this.navLinks = [
      {
        label: 'ingestion cv',
        link: 'ingestioncv',
        index: 0
      }, {
        label: 'ingestion offre',
        link: 'ingestionoffre',
        index: 1
      }
    ];*/


  }
   routes = [
        {linkName: 'Saisie cv', url1: 'ingestioncv'},
        {linkName: 'Gestions des CVs', url1: 'ingestionoffre'},
   ]

  ngOnInit() {

      this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.routes.indexOf(this.routes.find(tab => tab.linkName === '.' + this.router.url));
      });


    this.profileForm = this.fb.group({
      //name: [''],
      profile: ['']
    });
    this.router.events.subscribe((val)=> {
      if (val instanceof NavigationEnd) {
        let url = val.url;
        console.log(url);
      }
    });
  }
onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.profileForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
   // formData.append('name', this.profileForm.get('name').value);
    formData.append('profile', this.profileForm.get('profile').value);

    this.fileUploadService.upload(formData)
        .subscribe(res=>{
          this.fileUpload=res;
            console.log(res);
        }, err => this.error = err
      );
  }

}
