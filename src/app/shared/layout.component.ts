import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { SecondHeaderComponent } from './second-header/second-header.component'

@Component({
  selector: 'vx-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, SecondHeaderComponent],
})
export class LayoutComponent {}
