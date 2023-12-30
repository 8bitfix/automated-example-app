import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FileUploadEvent, UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  providers: [MessageService]
})
export class NewProductComponent implements OnInit {

  formGroup!: FormGroup;

  cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
  ];

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.formGroup = new FormGroup({
      selectedCities: new FormControl<any[] | null>(null)
    });
  }

  onUpload(event:FileUploadEvent) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  selectedCities = [];

}
