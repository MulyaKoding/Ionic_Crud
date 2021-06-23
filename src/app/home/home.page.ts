import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Student, StudentService } from '../services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  students: Student[];
  constructor(private  service: StudentService, 
    private alertCtrl: AlertController
    ) {}

  ngOnInit(){
    this.service.getAll().subscribe(response =>{
      this.students = response;
    });
  }

  removeStudent(id: string) {
    this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to delete?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.service.remove(id).subscribe(() => {
            this.students = this.students.filter(std => std.id !== id);
          });
        }
      }, 
      {text: 'No'}
      ]
    }).then(alertEl => alertEl.present())
   
  }
}
