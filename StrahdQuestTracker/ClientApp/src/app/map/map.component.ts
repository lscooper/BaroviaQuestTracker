
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

export interface GridCellSelection {
  row: number;
  column: number;
}

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input({ required: true }) imageUrl!: string;
  @Input() rows = 200;
  @Input() columns = 300;

  @Output() cellSelected =
    new EventEmitter<GridCellSelection>();

  selectedCell: GridCellSelection | null = null;

  get rowIndices(): number[] {
    return Array.from(
      { length: Math.max(0, Math.floor(this.rows)) },
      (_, i) => i + 1
    );
  }

  get columnIndices(): number[] {
    return Array.from(
      { length: Math.max(0, Math.floor(this.columns)) },
      (_, i) => i + 1
    );
  }

  selectCell(row: number, column: number): void {
    const selection = { row, column };

    this.selectedCell = selection;
    this.cellSelected.emit(selection);
  }

  isSelected(row: number, column: number): boolean {
    return this.selectedCell?.row === row &&
      this.selectedCell?.column === column;
  }
}
