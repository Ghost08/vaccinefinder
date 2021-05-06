import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  districts: any = [];
  selectedDistrict: any = '-1';
  availabilityDate: any;
  availableSessions: any = [];
  show = false;
  minDate: any;
  maxDate: any;
  searchTerm: string = '';
  recordsFound: boolean = false;

  constructor(private dataService: DataService) {
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
    };

    this.maxDate = {
      year: current.getFullYear(),
      month: 12,
      day: 31,
    };
  }

  ngOnInit(): void {
    this.dataService.getAllDisticts().subscribe((data) => {
      this.districts = data;
    });
  }

  private getAvailabilityData() {
    if (this.selectedDistrict !== '-1' && this.availabilityDate !== '') {
      let { day, month, year } = this.availabilityDate;
      let formattedDate = day + '-' + month + '-' + year;

      this.dataService
        .getVaccineAvailability(this.selectedDistrict, formattedDate)
        .subscribe((data) => {
          this.availableSessions = data.sessions;
          if (this.availableSessions.length === 0) {
            this.show = true;
          } else {
            this.recordsFound = true;
          }
        });
    }
  }
  onDateChange() {
    console.log(this.availabilityDate);
    this.getAvailabilityData();
  }
  onDistrictChange(e) {
    this.getAvailabilityData();
  }
}
