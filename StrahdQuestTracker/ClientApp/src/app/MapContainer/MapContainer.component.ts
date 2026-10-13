import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MapComponent } from '../map/map.component';
import type { GridCellSelection } from '../map/map.component';

@Component({
  selector: 'app-map-container',
  standalone: true,
  imports: [CommonModule, MapComponent],
  templateUrl: './MapContainer.component.html'
})
export class MapContainer {
  selection: GridCellSelection | null = null;

  constructor(private http: HttpClient) {}

  onCellSelected(selection: GridCellSelection): void {
    this.selection = selection;

    this.http.post(
      '/api/image-selections',
      selection
    ).subscribe({
      next: response => console.log('Saved:', response),
      error: error => console.error('Save failed:', error)
    });
  }
}
