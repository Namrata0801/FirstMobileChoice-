import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  form:FormGroup
  constructor(private userservice: UserService,private activatedroute:ActivatedRoute,private router:Router) { }

  onFileSelect(event){
    console.log(event)
    if(event.target.files.length >0){
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
    }
  }

  uploadFile(){
    const formData= new FormData();
    formData.append('myfile', this.form.get('image').value);
    this.userservice.saveImage(formData).subscribe((res)=>{
      console.log("data added", res);
      alert("data saved")
      this.router.navigateByUrl("/dispayimage")

    })
  }



  ngOnInit(): void {
    // this.form=new FormGroup({
    //   image:new FormControl(" ")
    // })
  }

}




