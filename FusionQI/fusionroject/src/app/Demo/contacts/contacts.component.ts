import { CommonModule } from '@angular/common';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 // Import HttpClientModule
// import { Router } from 'express';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{
 
  contacts:any;
  filteredContacts: any[] | undefined;
  constructor(private httpclient: HttpClient){

  }
  ngOnInit(): void {
   this.httpclient.get("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/contact/all").subscribe(res=>{
    this.contacts = res
   })
  }
  delete(number:any){
    this.httpclient.delete("http://ec2-13-127-176-161.ap-south-1.compute.amazonaws.com:8080/fusion/api/deleteEmp/"+number).subscribe(res=>{
      alert('deleted')
      this.ngOnInit()
    })
    console.log(number)
  }
 
  searchCandidates(key: string): void {
    console.log(key);

    let results: any[] = [];
    results = this.contacts.filter((contact: { fullname: string; email: string; phone: string; applying_for: string; member_status: string; }) =>
      (contact.fullname?.toLowerCase().includes(key.toLowerCase()) ||
      contact.email?.toLowerCase().includes(key.toLowerCase()) ||
      // contact.phone?.toLowerCase().includes(key.toLowerCase()) ||
      contact.applying_for?.toLowerCase().includes(key.toLowerCase()) ||
      contact.member_status?.toLowerCase().includes(key.toLowerCase())) ?? false
    );

    if (results.length === 0 || !key) {
      this.filteredContacts = [...this.contacts];
    } else {
      this.filteredContacts = results;
    }
  }
}
