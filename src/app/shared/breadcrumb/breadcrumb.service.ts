import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: string;
  isCurrent?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbItems = new BehaviorSubject<BreadcrumbItem[]>([]);
  breadcrumbItems$ = this.breadcrumbItems.asObservable();

  constructor() {}

  setBreadcrumbs(items: BreadcrumbItem[]): void {
    this.breadcrumbItems.next(items);
  }

  addBreadcrumb(item: BreadcrumbItem): void {
    const currentItems = this.breadcrumbItems.getValue();
    this.breadcrumbItems.next([...currentItems, item]);
  }

  resetBreadcrumbs(): void {
    this.breadcrumbItems.next([]);
  }
}