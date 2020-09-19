import { Component, OnInit } from '@angular/core';
import{UserService} from '../service/user.service'
@Component({
  selector: 'app-displayimg',
  templateUrl: './displayimg.component.html',
  styleUrls: ['./displayimg.component.css']
})
export class DisplayimgComponent implements OnInit {
upload:any=[]
imageDirectoryUrl:any="http://localhost/angular/upload.php/"

getImage()
{
  this.userservice.getImageData().subscribe((res)=>{
    this.upload=res

  })
}


constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getImage()
  }

}
