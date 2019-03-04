import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
    selector: 'app-second-cmp',
    templateUrl: './second-cmp.component.html',
    styleUrls: ['./second-cmp.component.css']
})
export class SecondCmpComponent implements OnInit{
  @ViewChild('menuEl') private menuEl: ElementRef;
  title = 'Angular 4 Project!';
  //array of months.
  months = ["January", "February", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"];
  isavailable = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router  
  ) {   
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(_ => {
          const menuId = event.urlAfterRedirects.substr(1);
          this.menuEl.nativeElement.highlightMenu(menuId);
        }, 500);
      }
    });
  }

  logout() {
    //this.authGuardSvc.logoff();
  }

  // istanbul ignore next
  changeLanguage(event) {
    //const currentLang = this.cookie.get('language');
    //document.cookie = currentLang === 'fr' ? 'language=en;' : 'language=fr;';
    window.location.reload();
  }

  // istanbul ignore next
  onDeactivate() {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    window.scrollTo(0, 0); // go to top when route changes
  }

  changeRoute(event) {
    const routeName = event.detail.replace(/-([0-9]+)$/, (_, num) => '/' + num);
    this.router.navigate([routeName]);
  }

  reportIssue(event) {
    //this.commonUtilsSvc.reportIssue(navigator.userAgent);
  }
}
