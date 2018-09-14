import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, RouterModule, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { PrestationService } from './prestation.service';
import { Prestation } from '../../shared/models/prestation-m';

@Injectable({
  providedIn: 'root'
})
export class PrestationResolverService implements Resolve<any> {

  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.paramMap.get('id');

    return this.prestationService.get(id).pipe(
      take(1),
      map(data => {
        if (data) {
          return data;
        } else {
          this.router.navigate(['/prestations']);
          return null;
        }
      })
    );
  }
}
