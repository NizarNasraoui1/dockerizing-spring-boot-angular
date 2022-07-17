import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../shared/models/Doctor';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  doctorsUrl: string = "http://localhost:8080/doctor/all"

  headers: HttpHeaders = new HttpHeaders()

  constructor(private http: HttpClient) {
  }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.doctorsUrl)
  }
  getDoctor(id:number): Observable<Doctor> {
    return this.http.get<Doctor>(`http://localhost:8080/doctor/find/${id}`)
  }


  getFilteredDoctors(name: String, selectedSpecialty: String, selectedGovernorate: String, doctors: Array<Doctor>): Doctor[] {
    return doctors.filter(doctor => this.nameIncluded(doctor, name))
      .filter(doctor => this.sameGov(doctor, selectedGovernorate))
      .filter(doctor => this.sameSpecialty(doctor, selectedSpecialty))
  }

  private sameSpecialty(doctor: Doctor, selectedSpecialty: String): unknown {
    return doctor.speciality.toString() == selectedSpecialty || selectedSpecialty == "Specialité";
  }

  private sameGov(doctor: Doctor, selectedGovernorate: String): unknown {
    return doctor.governorate == selectedGovernorate || selectedGovernorate == "Governorat";
  }

  private nameIncluded(doctor: Doctor, name: String): unknown {
    return doctor.firstName.toLowerCase().includes(name.toLowerCase().valueOf()) || doctor.lastName.toLowerCase().includes(name.toLowerCase().valueOf());
  }
}
