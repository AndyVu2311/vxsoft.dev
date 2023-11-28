import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'vx-uses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uses.component.html',
})
export class UsesComponent {
  hardwares = [
    {
      href: 'https://fb.com',
      model: 'Macbook Pro 14"',
      extra: '(Base Model)',
    },
    {
      href: '',
      model: 'Dell Ultrasharp U2723QE ',
      extra:
        '27.0 inch - UHD - IPS Black - 60Hz - 5ms - USB TypeC - DisplayHDR400',
    },
    {
      href: '',
      model: 'Keydous NJ80',
      extra: 'AP version',
    },
    {
      href: '',
      model: 'Hyperwork Silentium',
      extra: '',
    },
    {
      href: '',
      model: 'Asus TUF Gaming F15',
      extra:
        'Intel Core i5-12500H | 8GB | 512GB | RTX 3050 4GB | 15.6 inch FHD 144Hz',
    },
    {
      href: '',
      model: 'Prevail Epsilon',
      extra: '68g',
    },
    {
      href: '',
      model: 'Iphone 6-7-11-12',
      extra: '(Seasonal Swift Dev)',
    },
    {
      href: '',
      model: 'Sony WH-1000XM4',
      extra: 'for on-the-go',
    },
    {
      href: '',
      model: 'Shure 215',
      extra: 'daily driver',
    },
  ]
  softWare = [
    {
      href: '',
      name: 'VS Code',
      extra: 'Main code editor',
    },
    {
      href: '',
      name: 'XCode ',
      extra: 'For ios project',
    },
    {
      href: '',
      name: 'NeoVim',
      extra: 'personal project and learning (vim motion)',
    },
    {
      href: '',
      name: 'Postman',
      extra: 'for API development',
    },
    {
      href: '',
      name: 'Tmux',
      extra: 'terminal multiplexer',
    },
    {
      href: '',
      name: 'SQL workbench, SQLPro for MSSQL, DB Browser sqlite',
      extra: 'for databases',
    },
  ]
  designTools = [
    {
      href: '',
      name: 'Adobe Photoshop 2024',
      extra: 'Image editor and design',
    },
    {
      href: '',
      name: 'Adobe Illustrator ',
      extra: 'Logo design and vector image',
    },
    {
      href: '',
      name: 'Figma',
      extra: '',
    },
    {
      href: '',
      name: 'Draw.io',
      extra: 'for diagram',
    },
  ]
}
