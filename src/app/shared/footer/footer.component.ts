import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'vx-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear()
}
